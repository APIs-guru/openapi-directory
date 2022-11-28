import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Resources:
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

    
    def directory_resources_buildings_delete(self, request: operations.DirectoryResourcesBuildingsDeleteRequest) -> operations.DirectoryResourcesBuildingsDeleteResponse:
        r"""Deletes a building.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesBuildingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_resources_buildings_get(self, request: operations.DirectoryResourcesBuildingsGetRequest) -> operations.DirectoryResourcesBuildingsGetResponse:
        r"""Retrieves a building.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesBuildingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Building])
                res.building = out

        return res

    
    def directory_resources_buildings_insert(self, request: operations.DirectoryResourcesBuildingsInsertRequest) -> operations.DirectoryResourcesBuildingsInsertResponse:
        r"""Inserts a building.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/buildings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesBuildingsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Building])
                res.building = out

        return res

    
    def directory_resources_buildings_list(self, request: operations.DirectoryResourcesBuildingsListRequest) -> operations.DirectoryResourcesBuildingsListResponse:
        r"""Retrieves a list of buildings for an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/buildings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesBuildingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Buildings])
                res.buildings = out

        return res

    
    def directory_resources_buildings_patch(self, request: operations.DirectoryResourcesBuildingsPatchRequest) -> operations.DirectoryResourcesBuildingsPatchResponse:
        r"""Patches a building.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesBuildingsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Building])
                res.building = out

        return res

    
    def directory_resources_buildings_update(self, request: operations.DirectoryResourcesBuildingsUpdateRequest) -> operations.DirectoryResourcesBuildingsUpdateResponse:
        r"""Updates a building.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesBuildingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Building])
                res.building = out

        return res

    
    def directory_resources_calendars_delete(self, request: operations.DirectoryResourcesCalendarsDeleteRequest) -> operations.DirectoryResourcesCalendarsDeleteResponse:
        r"""Deletes a calendar resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesCalendarsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_resources_calendars_get(self, request: operations.DirectoryResourcesCalendarsGetRequest) -> operations.DirectoryResourcesCalendarsGetResponse:
        r"""Retrieves a calendar resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesCalendarsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarResource])
                res.calendar_resource = out

        return res

    
    def directory_resources_calendars_insert(self, request: operations.DirectoryResourcesCalendarsInsertRequest) -> operations.DirectoryResourcesCalendarsInsertResponse:
        r"""Inserts a calendar resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/calendars", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesCalendarsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarResource])
                res.calendar_resource = out

        return res

    
    def directory_resources_calendars_list(self, request: operations.DirectoryResourcesCalendarsListRequest) -> operations.DirectoryResourcesCalendarsListResponse:
        r"""Retrieves a list of calendar resources for an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/calendars", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesCalendarsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarResources])
                res.calendar_resources = out

        return res

    
    def directory_resources_calendars_patch(self, request: operations.DirectoryResourcesCalendarsPatchRequest) -> operations.DirectoryResourcesCalendarsPatchResponse:
        r"""Patches a calendar resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesCalendarsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarResource])
                res.calendar_resource = out

        return res

    
    def directory_resources_calendars_update(self, request: operations.DirectoryResourcesCalendarsUpdateRequest) -> operations.DirectoryResourcesCalendarsUpdateResponse:
        r"""Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesCalendarsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarResource])
                res.calendar_resource = out

        return res

    
    def directory_resources_features_delete(self, request: operations.DirectoryResourcesFeaturesDeleteRequest) -> operations.DirectoryResourcesFeaturesDeleteResponse:
        r"""Deletes a feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/features/{featureKey}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesFeaturesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_resources_features_get(self, request: operations.DirectoryResourcesFeaturesGetRequest) -> operations.DirectoryResourcesFeaturesGetResponse:
        r"""Retrieves a feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/features/{featureKey}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesFeaturesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Feature])
                res.feature = out

        return res

    
    def directory_resources_features_insert(self, request: operations.DirectoryResourcesFeaturesInsertRequest) -> operations.DirectoryResourcesFeaturesInsertResponse:
        r"""Inserts a feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/features", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesFeaturesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Feature])
                res.feature = out

        return res

    
    def directory_resources_features_list(self, request: operations.DirectoryResourcesFeaturesListRequest) -> operations.DirectoryResourcesFeaturesListResponse:
        r"""Retrieves a list of features for an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/features", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesFeaturesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Features])
                res.features = out

        return res

    
    def directory_resources_features_patch(self, request: operations.DirectoryResourcesFeaturesPatchRequest) -> operations.DirectoryResourcesFeaturesPatchResponse:
        r"""Patches a feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/features/{featureKey}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesFeaturesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Feature])
                res.feature = out

        return res

    
    def directory_resources_features_rename(self, request: operations.DirectoryResourcesFeaturesRenameRequest) -> operations.DirectoryResourcesFeaturesRenameResponse:
        r"""Renames a feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesFeaturesRenameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_resources_features_update(self, request: operations.DirectoryResourcesFeaturesUpdateRequest) -> operations.DirectoryResourcesFeaturesUpdateResponse:
        r"""Updates a feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/resources/features/{featureKey}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryResourcesFeaturesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Feature])
                res.feature = out

        return res

    