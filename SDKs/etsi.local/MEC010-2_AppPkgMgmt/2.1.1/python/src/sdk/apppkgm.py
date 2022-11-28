import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class AppPkgm:
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

    
    def app_dget(self, request: operations.AppDgetRequest) -> operations.AppDgetResponse:
        r"""Reads the content of the AppD of on-boarded individual application package resources.
        Reads the content of the AppD of on-boarded individual application package resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/onboarded_app_packages/{appDId}/appd", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppDgetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_d_id_get(self, request: operations.AppDIDGetRequest) -> operations.AppDIDGetResponse:
        r"""Fetch the onboarded application package content identified by appPkgId or appDId.
        Fetch the onboarded application package content identified by appPkgId or appDId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/onboarded_app_packages/{appDId}/package_content", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppDIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 206:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 416:
            pass
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_d_id_put(self, request: operations.AppDIDPutRequest) -> operations.AppDIDPutResponse:
        r"""Uploads the content of application package.
        Uploads the content of application package.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/onboarded_app_packages/{appDId}/package_content", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppDIDPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_pkg_get(self, request: operations.AppPkgGetRequest) -> operations.AppPkgGetResponse:
        r"""Fetch the onboarded application package content identified by appPkgId or appDId.
        Fetch the onboarded application package content identified by appPkgId or appDId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app_packages/{appPkgId}/package_content", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppPkgGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 206:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 416:
            pass
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_pkg_id_get(self, request: operations.AppPkgIDGetRequest) -> operations.AppPkgIDGetResponse:
        r"""Reads the content of the AppD of on-boarded individual application package resources.
        Reads the content of the AppD of on-boarded individual application package resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app_packages/{appPkgId}/appd", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppPkgIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_pkg_put(self, request: operations.AppPkgPutRequest) -> operations.AppPkgPutResponse:
        r"""Uploads the content of application package.
        Uploads the content of application package.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app_packages/{appPkgId}/package_content", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppPkgPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_package_delete(self, request: operations.AppPackageDeleteRequest) -> operations.AppPackageDeleteResponse:
        r"""Deletes an individual application package resources
        Deletes an individual application package resources
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app_packages/{appPkgId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppPackageDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_package_get(self, request: operations.AppPackageGetRequest) -> operations.AppPackageGetResponse:
        r"""Queries the information related to individual application package resources
        Queries the information related to individual application package resources
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app_packages/{appPkgId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppPackageGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppPkgInfo])
                res.app_pkg_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_package_patch(self, request: operations.AppPackagePatchRequest) -> operations.AppPackagePatchResponse:
        r"""Updates the operational state of an individual application package resource
        Updates the operational state of an individual application package resources
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app_packages/{appPkgId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppPackagePatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppPkgInfoModifications])
                res.app_pkg_info_modifications = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_packages_get(self, request: operations.AppPackagesGetRequest) -> operations.AppPackagesGetResponse:
        r"""Queries information relating to on-boarded application packages in the MEO
        queries information relating to on-boarded application packages in the MEO
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/app_packages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppPackagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AppPkgInfo]])
                res.app_pkg_infos = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def app_packages_post(self, request: operations.AppPackagesPostRequest) -> operations.AppPackagesPostResponse:
        r"""Create a resource for on-boarding an application package to a MEO
        Create a resource for on-boarding an application package to a MEO
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/app_packages"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppPackagesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AppPkgInfo]])
                res.app_pkg_infos = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def individual_subscription_delete(self, request: operations.IndividualSubscriptionDeleteRequest) -> operations.IndividualSubscriptionDeleteResponse:
        r"""Deletes the individual subscription to notifications about application package changes in MEO.
        Deletes the individual subscription to notifications about application package changes in MEO.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IndividualSubscriptionDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def individual_subscription_get(self, request: operations.IndividualSubscriptionGetRequest) -> operations.IndividualSubscriptionGetResponse:
        r"""Used to represent an individual subscription to notifications about application package changes.
        Used to represent an individual subscription to notifications about application package changes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IndividualSubscriptionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppPkgSubscriptionInfo])
                res.app_pkg_subscription_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def subscriptions_get(self) -> operations.SubscriptionsGetResponse:
        r"""used to retrieve the information of subscriptions to individual application package resource in MEO
        used to retrieve the information of subscriptions to individual application package resource in MEO package
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscriptions"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscriptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppPkgSubscriptionLinkList])
                res.app_pkg_subscription_link_list = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    