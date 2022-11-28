import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def analyticshub_projects_locations_data_exchanges_create(self, request: operations.AnalyticshubProjectsLocationsDataExchangesCreateRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesCreateResponse:
        r"""Creates a new data exchange.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/dataExchanges", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataExchange])
                res.data_exchange = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_list(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListResponse:
        r"""Lists all data exchanges in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/dataExchanges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDataExchangesResponse])
                res.list_data_exchanges_response = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_create(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsCreateRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsCreateResponse:
        r"""Creates a new listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/listings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_delete(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse:
        r"""Deletes a listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_get(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsGetRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsGetResponse:
        r"""Gets the details of a listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_get_iam_policy(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse:
        r"""Gets the IAM policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_list(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsListRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsListResponse:
        r"""Lists all listings in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListListingsResponse])
                res.list_listings_response = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_patch(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse:
        r"""Updates an existing listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_set_iam_policy(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyResponse:
        r"""Sets the IAM policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_subscribe(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsSubscribeRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsSubscribeResponse:
        r"""Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:subscribe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsSubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.subscribe_listing_response = out

        return res

    
    def analyticshub_projects_locations_data_exchanges_listings_test_iam_permissions(self, request: operations.AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsRequest) -> operations.AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsResponse:
        r"""Returns the permissions that a caller has.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    