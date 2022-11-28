import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Database:
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

    
    def database_create_collection(self, request: operations.DatabaseCreateCollectionRequest) -> operations.DatabaseCreateCollectionResponse:
        r"""Create Collection
        Create a new Collection.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/collections"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseCreateCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Collection])
                res.collection = out

        return res

    
    def database_create_document(self, request: operations.DatabaseCreateDocumentRequest) -> operations.DatabaseCreateDocumentResponse:
        r"""Create Document
        Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/collections/{collectionId}/documents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseCreateDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.document = out

        return res

    
    def database_delete_collection(self, request: operations.DatabaseDeleteCollectionRequest) -> operations.DatabaseDeleteCollectionResponse:
        r"""Delete Collection
        Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/collections/{collectionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseDeleteCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def database_delete_document(self, request: operations.DatabaseDeleteDocumentRequest) -> operations.DatabaseDeleteDocumentResponse:
        r"""Delete Document
        Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/collections/{collectionId}/documents/{documentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseDeleteDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def database_get_collection(self, request: operations.DatabaseGetCollectionRequest) -> operations.DatabaseGetCollectionResponse:
        r"""Get Collection
        Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/collections/{collectionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseGetCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Collection])
                res.collection = out

        return res

    
    def database_get_document(self, request: operations.DatabaseGetDocumentRequest) -> operations.DatabaseGetDocumentResponse:
        r"""Get Document
        Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/collections/{collectionId}/documents/{documentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseGetDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.document = out

        return res

    
    def database_list_collections(self, request: operations.DatabaseListCollectionsRequest) -> operations.DatabaseListCollectionsResponse:
        r"""List Collections
        Get a list of all the user collections. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's collections. [Learn more about different API modes](/docs/admin).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/database/collections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseListCollectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionList])
                res.collection_list = out

        return res

    
    def database_list_documents(self, request: operations.DatabaseListDocumentsRequest) -> operations.DatabaseListDocumentsResponse:
        r"""List Documents
        Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/collections/{collectionId}/documents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseListDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DocumentList])
                res.document_list = out

        return res

    
    def database_update_collection(self, request: operations.DatabaseUpdateCollectionRequest) -> operations.DatabaseUpdateCollectionResponse:
        r"""Update Collection
        Update a collection by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/collections/{collectionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseUpdateCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Collection])
                res.collection = out

        return res

    
    def database_update_document(self, request: operations.DatabaseUpdateDocumentRequest) -> operations.DatabaseUpdateDocumentResponse:
        r"""Update Document
        Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/database/collections/{collectionId}/documents/{documentId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatabaseUpdateDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.document = out

        return res

    