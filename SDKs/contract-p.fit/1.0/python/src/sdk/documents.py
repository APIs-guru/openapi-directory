import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Documents:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_document_resource(self, request: operations.DeleteDocumentResourceRequest) -> operations.DeleteDocumentResourceResponse:
        r"""Delete the document
        Completely delete the document.
        
        **WARNING** This removes the document from our system: it will not be recoverable
        
        
        **Permission required:** review
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{document_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDocumentResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_document_original_file_resource(self, request: operations.GetDocumentOriginalFileResourceRequest) -> operations.GetDocumentOriginalFileResourceResponse:
        r"""Get document original file
        Return the document original file, as attachment.
        
        **Permission required:** review
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{document_id}/original_file", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentOriginalFileResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_document_page_image_resource(self, request: operations.GetDocumentPageImageResourceRequest) -> operations.GetDocumentPageImageResourceResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{document_id}/page/{page_range}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentPageImageResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_document_resource(self, request: operations.GetDocumentResourceRequest) -> operations.GetDocumentResourceResponse:
        r"""Get the document
        Simple endpoint that will fetch the given document
        
        **Permission required:** review
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{document_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DocumentModelGet])
                res.document_model_get = out
        elif r.status_code == 403:
            pass

        return res

    
    def get_document_text_resource(self, request: operations.GetDocumentTextResourceRequest) -> operations.GetDocumentTextResourceResponse:
        r"""Get the document text
        Return the optimal text for the document; will either be the OCR text, the native text,
        the raw text or a translated version.
        
        **Permission required:** review
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{document_id}/text", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentTextResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 403:
            pass

        return res

    
    def post_documents_simple_api_resource(self, request: operations.PostDocumentsSimpleAPIResourceRequest) -> operations.PostDocumentsSimpleAPIResourceResponse:
        r"""Upload a new doc to the inbox
        This endpoint uploads a new file to the given inbox and will process the file.
        
        ## Upload mode: sync
        
        When sync=true (default), the call will block and wait for the processing to complete.
        
        If you have a custom output configured (this is set by Contract Fit team),
        passing mimetype *application/vnd.cf.custom* will allow you to get the custom output formatted result
        
        Since it might yield inconsistent results if a timeout is raised while waiting,
        it is recommended to use the **async** mode.
        
        ## Upload mode: async
        
        When sync=false, the call will schedule the processing and return without waiting for completion.
        It will return the document ID, so that the processed document can be retrieved at a later date.
        
        **Permission required:** upload
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{inbox_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDocumentsSimpleAPIResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 415:
            pass

        return res

    
    def post_simple_documents_resource(self, request: operations.PostSimpleDocumentsResourceRequest) -> operations.PostSimpleDocumentsResourceResponse:
        r"""Upload a new document
        This endpoint is a simplified version of the upload document to inbox one - synchronous mode.
        
        The upload file will be upload to the given inbox if provided, else fallback to the **invoice** inbox.
        The file will be processed synchronously, ie the request will blocks until the document was processed
        *or* until it timeout; in this case the document might **not** be correctly processed.
        
        
        For a more reliable processing use the /documents/{inbox_id} endpoint in async mode
        
        
        **Permission required:** upload
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/documents/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSimpleDocumentsResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass

        return res

    