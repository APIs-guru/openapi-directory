import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class FileApIs:
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

    
    def get_certificate_data_in_xml_format_from_uri_id(self, request: operations.GetCertificateDataInXMLFormatFromURIIDRequest) -> operations.GetCertificateDataInXMLFormatFromURIIDResponse:
        r"""Get Certificate Data in XML Format from URI
        Returns the certificate data in machine readable XML format for a URI. This API can be used to only for issued documents. The XML data may not be available for all documents. If the XML data is available for a particular document, the mime parameter in Get List of Issued Documents API will contain application/xml. Please refer to Digital Locker XML Certificate Formats for more details of XML formats of various documents.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/oauth2/1/xml/{uri}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificateDataInXMLFormatFromURIIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificateDataInXMLFormatFromURIID400ApplicationJSON])
                res.get_certificate_data_in_xml_format_from_uri_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificateDataInXMLFormatFromURIID401ApplicationJSON])
                res.get_certificate_data_in_xml_format_from_uri_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificateDataInXMLFormatFromURIID404ApplicationJSON])
                res.get_certificate_data_in_xml_format_from_uri_id_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_certificate_data_in_xml_format_from_uri_id_500_application_json_one_of = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_certificate_data_in_xml_format_from_uri_id_503_application_json_one_of = out

        return res

    
    def get_file_from_uri_id(self, request: operations.GetFileFromURIIDRequest) -> operations.GetFileFromURIIDResponse:
        r"""Get File from URI
        Returns a file from URI. This API can be used to fetch both issued document and uploaded document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/oauth2/1/file/{uri}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFileFromURIIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.get_file_from_uri_id_200_application_pdf_string = r.content
            if utils.match_content_type(content_type, "image/jpeg"):
                res.get_file_from_uri_id_200_image_jpeg_string = r.content
            if utils.match_content_type(content_type, "image/jpg"):
                res.get_file_from_uri_id_200_image_jpg_string = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.get_file_from_uri_id_200_image_png_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFileFromURIID400ApplicationJSON])
                res.get_file_from_uri_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFileFromURIID401ApplicationJSON])
                res.get_file_from_uri_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFileFromURIID404ApplicationJSON])
                res.get_file_from_uri_id_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_file_from_uri_id_500_application_json_one_of = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_file_from_uri_id_503_application_json_one_of = out

        return res

    
    def get_list_of_self_uploaded_documents(self, request: operations.GetListOfSelfUploadedDocumentsRequest) -> operations.GetListOfSelfUploadedDocumentsResponse:
        r"""Get List of Self Uploaded Documents
        Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/files/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfSelfUploadedDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.sample = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfSelfUploadedDocuments401ApplicationJSON])
                res.get_list_of_self_uploaded_documents_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfSelfUploadedDocuments404ApplicationJSON])
                res.get_list_of_self_uploaded_documents_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfSelfUploadedDocuments500ApplicationJSON])
                res.get_list_of_self_uploaded_documents_500_application_json_object = out

        return res

    
    def get_list_of_self_uploaded_documents_id(self, request: operations.GetListOfSelfUploadedDocumentsIDRequest) -> operations.GetListOfSelfUploadedDocumentsIDResponse:
        r"""Get List of Self Uploaded Documents
        Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/oauth2/1/files/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfSelfUploadedDocumentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.sample = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfSelfUploadedDocumentsID401ApplicationJSON])
                res.get_list_of_self_uploaded_documents_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfSelfUploadedDocumentsID404ApplicationJSON])
                res.get_list_of_self_uploaded_documents_id_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfSelfUploadedDocumentsID500ApplicationJSON])
                res.get_list_of_self_uploaded_documents_id_500_application_json_object = out

        return res

    
    def get_list_of_issued_documents_version1_id(self, request: operations.GetListOfIssuedDocumentsVersion1IDRequest) -> operations.GetListOfIssuedDocumentsVersion1IDResponse:
        r"""Issued Documents
        Returns the list of meta-data about issued documents in user’s DigiLocker.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/files/issued"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfIssuedDocumentsVersion1IDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.sample = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfIssuedDocumentsVersion1ID401ApplicationJSON])
                res.get_list_of_issued_documents_version1_id_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_list_of_issued_documents_version1_id_500_application_json_one_of = out

        return res

    
    def get_list_of_issued_documents_id(self) -> operations.GetListOfIssuedDocumentsIDResponse:
        r"""Issued Documents
        Returns the list of meta-data about issued documents in user’s DigiLocker.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/2/files/issued"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfIssuedDocumentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfIssuedDocumentsID200ApplicationJSON])
                res.get_list_of_issued_documents_id_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfIssuedDocumentsID401ApplicationJSON])
                res.get_list_of_issued_documents_id_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_list_of_issued_documents_id_500_application_json_one_of = out

        return res

    
    def get_e_aadhaar_data_in_xml_format_id(self, request: operations.GetEAadhaarDataInXMLFormatIDRequest) -> operations.GetEAadhaarDataInXMLFormatIDResponse:
        r"""Get e-Aadhaar Data in XML Format
        Returns e-Aadhaar data in XML format for the account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/2/xml/eaadhaar"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEAadhaarDataInXMLFormatIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEAadhaarDataInXMLFormatID401ApplicationJSON])
                res.get_e_aadhaar_data_in_xml_format_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEAadhaarDataInXMLFormatID404ApplicationJSON])
                res.get_e_aadhaar_data_in_xml_format_id_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_e_aadhaar_data_in_xml_format_id_500_application_json_one_of = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_e_aadhaar_data_in_xml_format_id_503_application_json_one_of = out

        return res

    
    def pull_document_id(self, request: operations.PullDocumentIDRequest) -> operations.PullDocumentIDResponse:
        r"""Pull Document
        This API allows a client application to search a document/certificate from issuer’s repository using the parameters provided by a user. The searched document is saved in user’s issued document section of DigiLocker if the search is successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/pull/pulldocument"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullDocumentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.sample = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pull_document_id_400_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PullDocumentID401ApplicationJSON])
                res.pull_document_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PullDocumentID404ApplicationJSON])
                res.pull_document_id_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pull_document_id_500_application_json_one_of = out

        return res

    
    def upload_file_to_locker_id(self, request: operations.UploadFileToLockerIDRequest) -> operations.UploadFileToLockerIDResponse:
        r"""Upload file to locker
        This API can be used to save/upload a file to uploaded documents in DigiLocker. The allowed file types are JPG, JPEG, PNG and PDF. The file size must not exceed 10MB.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/file/upload"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadFileToLockerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_upload_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UploadFileToLockerID400ApplicationJSON])
                res.upload_file_to_locker_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UploadFileToLockerID401ApplicationJSON])
                res.upload_file_to_locker_id_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UploadFileToLockerID500ApplicationJSON])
                res.upload_file_to_locker_id_500_application_json_object = out

        return res

    