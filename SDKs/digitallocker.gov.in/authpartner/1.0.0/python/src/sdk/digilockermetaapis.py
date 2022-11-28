import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class DigiLockerMetaApIs:
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

    
    def get_list_of_documents_provided_by_an_issuer_id(self, request: operations.GetListOfDocumentsProvidedByAnIssuerIDRequest) -> operations.GetListOfDocumentsProvidedByAnIssuerIDResponse:
        r"""Get List of Documents Provided by an Issuer
        Returns a list of documents/certificates issued by an issuer organization registered with DigiLocker.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/pull/doctype"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfDocumentsProvidedByAnIssuerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DocTypeResponse])
                res.doc_type_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfDocumentsProvidedByAnIssuerID400ApplicationJSON])
                res.get_list_of_documents_provided_by_an_issuer_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfDocumentsProvidedByAnIssuerID401ApplicationJSON])
                res.get_list_of_documents_provided_by_an_issuer_id_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfDocumentsProvidedByAnIssuerID500ApplicationJSON])
                res.get_list_of_documents_provided_by_an_issuer_id_500_application_json_object = out

        return res

    
    def get_list_of_issuers_id(self, request: operations.GetListOfIssuersIDRequest) -> operations.GetListOfIssuersIDResponse:
        r"""Get List of Issuers
        Returns the list of issuers registered with DigiLocker.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/pull/issuers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfIssuersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssuerResponse])
                res.issuer_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfIssuersID400ApplicationJSON])
                res.get_list_of_issuers_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfIssuersID401ApplicationJSON])
                res.get_list_of_issuers_id_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfIssuersID500ApplicationJSON])
                res.get_list_of_issuers_id_500_application_json_object = out

        return res

    
    def get_search_parameters_for_a_document_id(self, request: operations.GetSearchParametersForADocumentIDRequest) -> operations.GetSearchParametersForADocumentIDResponse:
        r"""Get Search Parameters for a Document
        Returns a list of parameters required to search a document/certificate of an issuer organization registered with DigiLocker. These parameters are used to pull a document from issuer’s repository using Pull Document API mentioned in subsequent section.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/1/pull/parameters"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchParametersForADocumentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SearchParametersResponse]])
                res.search_parameters_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSearchParametersForADocumentID400ApplicationJSON])
                res.get_search_parameters_for_a_document_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSearchParametersForADocumentID401ApplicationJSON])
                res.get_search_parameters_for_a_document_id_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSearchParametersForADocumentID500ApplicationJSON])
                res.get_search_parameters_for_a_document_id_500_application_json_object = out

        return res

    
    def get_statistics_id(self, request: operations.GetStatisticsIDRequest) -> operations.GetStatisticsIDResponse:
        r"""Get Statistics
        Returns DigiLocker statistics such as the count of users, authentic documents, issuers and requesters as on a specific date.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/statistics/1/counts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetStatisticsResponse])
                res.get_statistics_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatisticsID400ApplicationJSON])
                res.get_statistics_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatisticsID401ApplicationJSON])
                res.get_statistics_id_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatisticsID500ApplicationJSON])
                res.get_statistics_id_500_application_json_object = out

        return res

    
    def push_uri_to_account_id(self, request: operations.PushURIToAccountIDRequest) -> operations.PushURIToAccountIDResponse:
        r"""Push URI to Account
        The API can use to push or delete a single URI into Digital Locker using DigiLocker Id acquired using Get User Details API. This API can be used to push the certificate details to Digital Locker as and when a certificate is generated in the issuer system. The issuing departments must register on DigiLocker as a registered Issuer and implement the requisite Issuer APIs as mentioned in Digital Locker Issuer API Specification document prior to pushing certificates using this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/1/pushuri"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PushURIToAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.sample = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PushURIToAccountID400ApplicationJSON])
                res.push_uri_to_account_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PushURIToAccountID401ApplicationJSON])
                res.push_uri_to_account_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PushURIToAccountID404ApplicationJSON])
                res.push_uri_to_account_id_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PushURIToAccountID500ApplicationJSON])
                res.push_uri_to_account_id_500_application_json_object = out

        return res

    
    def verify_account_id(self, request: operations.VerifyAccountIDRequest) -> operations.VerifyAccountIDResponse:
        r"""Verify Account
        This API can be used to verify whether a mobile number or Aadhaar number is already registered with DigiLocker.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/2/verify"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyAccountResponse])
                res.verify_account_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VerifyAccountID400ApplicationJSON])
                res.verify_account_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VerifyAccountID401ApplicationJSON])
                res.verify_account_id_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VerifyAccountID500ApplicationJSON])
                res.verify_account_id_500_application_json_object = out

        return res

    