import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://androidpublisher.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def androidpublisher_applications_device_tier_configs_create(self, request: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest) -> operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/deviceTierConfigs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceTierConfig])
                res.device_tier_config = out

        return res

    
    
    def androidpublisher_applications_device_tier_configs_get(self, request: operations.AndroidpublisherApplicationsDeviceTierConfigsGetRequest) -> operations.AndroidpublisherApplicationsDeviceTierConfigsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherApplicationsDeviceTierConfigsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceTierConfig])
                res.device_tier_config = out

        return res

    
    
    def androidpublisher_applications_device_tier_configs_list(self, request: operations.AndroidpublisherApplicationsDeviceTierConfigsListRequest) -> operations.AndroidpublisherApplicationsDeviceTierConfigsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/deviceTierConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherApplicationsDeviceTierConfigsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDeviceTierConfigsResponse])
                res.list_device_tier_configs_response = out

        return res

    
    
    def androidpublisher_edits_apks_addexternallyhosted(self, request: operations.AndroidpublisherEditsApksAddexternallyhostedRequest) -> operations.AndroidpublisherEditsApksAddexternallyhostedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApksAddexternallyhostedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApksAddExternallyHostedResponse])
                res.apks_add_externally_hosted_response = out

        return res

    
    
    def androidpublisher_edits_apks_list(self, request: operations.AndroidpublisherEditsApksListRequest) -> operations.AndroidpublisherEditsApksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApksListResponse])
                res.apks_list_response = out

        return res

    
    
    def androidpublisher_edits_apks_upload(self, request: operations.AndroidpublisherEditsApksUploadRequest) -> operations.AndroidpublisherEditsApksUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApksUploadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Apk])
                res.apk = out

        return res

    
    
    def androidpublisher_edits_bundles_list(self, request: operations.AndroidpublisherEditsBundlesListRequest) -> operations.AndroidpublisherEditsBundlesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsBundlesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BundlesListResponse])
                res.bundles_list_response = out

        return res

    
    
    def androidpublisher_edits_bundles_upload(self, request: operations.AndroidpublisherEditsBundlesUploadRequest) -> operations.AndroidpublisherEditsBundlesUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsBundlesUploadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bundle])
                res.bundle = out

        return res

    
    
    def androidpublisher_edits_commit(self, request: operations.AndroidpublisherEditsCommitRequest) -> operations.AndroidpublisherEditsCommitResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}:commit", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsCommitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppEdit])
                res.app_edit = out

        return res

    
    
    def androidpublisher_edits_countryavailability_get(self, request: operations.AndroidpublisherEditsCountryavailabilityGetRequest) -> operations.AndroidpublisherEditsCountryavailabilityGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsCountryavailabilityGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrackCountryAvailability])
                res.track_country_availability = out

        return res

    
    
    def androidpublisher_edits_delete(self, request: operations.AndroidpublisherEditsDeleteRequest) -> operations.AndroidpublisherEditsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_edits_deobfuscationfiles_upload(self, request: operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest) -> operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeobfuscationFilesUploadResponse])
                res.deobfuscation_files_upload_response = out

        return res

    
    
    def androidpublisher_edits_details_get(self, request: operations.AndroidpublisherEditsDetailsGetRequest) -> operations.AndroidpublisherEditsDetailsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/details", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDetailsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppDetails])
                res.app_details = out

        return res

    
    
    def androidpublisher_edits_details_patch(self, request: operations.AndroidpublisherEditsDetailsPatchRequest) -> operations.AndroidpublisherEditsDetailsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/details", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDetailsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppDetails])
                res.app_details = out

        return res

    
    
    def androidpublisher_edits_details_update(self, request: operations.AndroidpublisherEditsDetailsUpdateRequest) -> operations.AndroidpublisherEditsDetailsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/details", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDetailsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppDetails])
                res.app_details = out

        return res

    
    
    def androidpublisher_edits_expansionfiles_get(self, request: operations.AndroidpublisherEditsExpansionfilesGetRequest) -> operations.AndroidpublisherEditsExpansionfilesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExpansionFile])
                res.expansion_file = out

        return res

    
    
    def androidpublisher_edits_expansionfiles_patch(self, request: operations.AndroidpublisherEditsExpansionfilesPatchRequest) -> operations.AndroidpublisherEditsExpansionfilesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExpansionFile])
                res.expansion_file = out

        return res

    
    
    def androidpublisher_edits_expansionfiles_update(self, request: operations.AndroidpublisherEditsExpansionfilesUpdateRequest) -> operations.AndroidpublisherEditsExpansionfilesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExpansionFile])
                res.expansion_file = out

        return res

    
    
    def androidpublisher_edits_expansionfiles_upload(self, request: operations.AndroidpublisherEditsExpansionfilesUploadRequest) -> operations.AndroidpublisherEditsExpansionfilesUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesUploadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExpansionFilesUploadResponse])
                res.expansion_files_upload_response = out

        return res

    
    
    def androidpublisher_edits_get(self, request: operations.AndroidpublisherEditsGetRequest) -> operations.AndroidpublisherEditsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppEdit])
                res.app_edit = out

        return res

    
    
    def androidpublisher_edits_images_delete(self, request: operations.AndroidpublisherEditsImagesDeleteRequest) -> operations.AndroidpublisherEditsImagesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_edits_images_deleteall(self, request: operations.AndroidpublisherEditsImagesDeleteallRequest) -> operations.AndroidpublisherEditsImagesDeleteallResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesDeleteallResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesDeleteAllResponse])
                res.images_delete_all_response = out

        return res

    
    
    def androidpublisher_edits_images_list(self, request: operations.AndroidpublisherEditsImagesListRequest) -> operations.AndroidpublisherEditsImagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesListResponse])
                res.images_list_response = out

        return res

    
    
    def androidpublisher_edits_images_upload(self, request: operations.AndroidpublisherEditsImagesUploadRequest) -> operations.AndroidpublisherEditsImagesUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesUploadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesUploadResponse])
                res.images_upload_response = out

        return res

    
    
    def androidpublisher_edits_insert(self, request: operations.AndroidpublisherEditsInsertRequest) -> operations.AndroidpublisherEditsInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsInsertResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppEdit])
                res.app_edit = out

        return res

    
    
    def androidpublisher_edits_listings_delete(self, request: operations.AndroidpublisherEditsListingsDeleteRequest) -> operations.AndroidpublisherEditsListingsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_edits_listings_deleteall(self, request: operations.AndroidpublisherEditsListingsDeleteallRequest) -> operations.AndroidpublisherEditsListingsDeleteallResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsDeleteallResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_edits_listings_get(self, request: operations.AndroidpublisherEditsListingsGetRequest) -> operations.AndroidpublisherEditsListingsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    
    def androidpublisher_edits_listings_list(self, request: operations.AndroidpublisherEditsListingsListRequest) -> operations.AndroidpublisherEditsListingsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingsListResponse])
                res.listings_list_response = out

        return res

    
    
    def androidpublisher_edits_listings_patch(self, request: operations.AndroidpublisherEditsListingsPatchRequest) -> operations.AndroidpublisherEditsListingsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    
    def androidpublisher_edits_listings_update(self, request: operations.AndroidpublisherEditsListingsUpdateRequest) -> operations.AndroidpublisherEditsListingsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    
    def androidpublisher_edits_testers_get(self, request: operations.AndroidpublisherEditsTestersGetRequest) -> operations.AndroidpublisherEditsTestersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTestersGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Testers])
                res.testers = out

        return res

    
    
    def androidpublisher_edits_testers_patch(self, request: operations.AndroidpublisherEditsTestersPatchRequest) -> operations.AndroidpublisherEditsTestersPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTestersPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Testers])
                res.testers = out

        return res

    
    
    def androidpublisher_edits_testers_update(self, request: operations.AndroidpublisherEditsTestersUpdateRequest) -> operations.AndroidpublisherEditsTestersUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTestersUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Testers])
                res.testers = out

        return res

    
    
    def androidpublisher_edits_tracks_get(self, request: operations.AndroidpublisherEditsTracksGetRequest) -> operations.AndroidpublisherEditsTracksGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Track])
                res.track = out

        return res

    
    
    def androidpublisher_edits_tracks_list(self, request: operations.AndroidpublisherEditsTracksListRequest) -> operations.AndroidpublisherEditsTracksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TracksListResponse])
                res.tracks_list_response = out

        return res

    
    
    def androidpublisher_edits_tracks_patch(self, request: operations.AndroidpublisherEditsTracksPatchRequest) -> operations.AndroidpublisherEditsTracksPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Track])
                res.track = out

        return res

    
    
    def androidpublisher_edits_tracks_update(self, request: operations.AndroidpublisherEditsTracksUpdateRequest) -> operations.AndroidpublisherEditsTracksUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Track])
                res.track = out

        return res

    
    
    def androidpublisher_edits_validate(self, request: operations.AndroidpublisherEditsValidateRequest) -> operations.AndroidpublisherEditsValidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}:validate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsValidateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppEdit])
                res.app_edit = out

        return res

    
    
    def androidpublisher_generatedapks_download(self, request: operations.AndroidpublisherGeneratedapksDownloadRequest) -> operations.AndroidpublisherGeneratedapksDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherGeneratedapksDownloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_generatedapks_list(self, request: operations.AndroidpublisherGeneratedapksListRequest) -> operations.AndroidpublisherGeneratedapksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherGeneratedapksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeneratedApksListResponse])
                res.generated_apks_list_response = out

        return res

    
    
    def androidpublisher_grants_create(self, request: operations.AndroidpublisherGrantsCreateRequest) -> operations.AndroidpublisherGrantsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/{parent}/grants", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherGrantsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Grant])
                res.grant = out

        return res

    
    
    def androidpublisher_inappproducts_delete(self, request: operations.AndroidpublisherInappproductsDeleteRequest) -> operations.AndroidpublisherInappproductsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_inappproducts_get(self, request: operations.AndroidpublisherInappproductsGetRequest) -> operations.AndroidpublisherInappproductsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InAppProduct])
                res.in_app_product = out

        return res

    
    
    def androidpublisher_inappproducts_insert(self, request: operations.AndroidpublisherInappproductsInsertRequest) -> operations.AndroidpublisherInappproductsInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsInsertResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InAppProduct])
                res.in_app_product = out

        return res

    
    
    def androidpublisher_inappproducts_list(self, request: operations.AndroidpublisherInappproductsListRequest) -> operations.AndroidpublisherInappproductsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InappproductsListResponse])
                res.inappproducts_list_response = out

        return res

    
    
    def androidpublisher_inappproducts_patch(self, request: operations.AndroidpublisherInappproductsPatchRequest) -> operations.AndroidpublisherInappproductsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InAppProduct])
                res.in_app_product = out

        return res

    
    
    def androidpublisher_inappproducts_update(self, request: operations.AndroidpublisherInappproductsUpdateRequest) -> operations.AndroidpublisherInappproductsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InAppProduct])
                res.in_app_product = out

        return res

    
    
    def androidpublisher_internalappsharingartifacts_uploadapk(self, request: operations.AndroidpublisherInternalappsharingartifactsUploadapkRequest) -> operations.AndroidpublisherInternalappsharingartifactsUploadapkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInternalappsharingartifactsUploadapkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalAppSharingArtifact])
                res.internal_app_sharing_artifact = out

        return res

    
    
    def androidpublisher_internalappsharingartifacts_uploadbundle(self, request: operations.AndroidpublisherInternalappsharingartifactsUploadbundleRequest) -> operations.AndroidpublisherInternalappsharingartifactsUploadbundleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInternalappsharingartifactsUploadbundleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalAppSharingArtifact])
                res.internal_app_sharing_artifact = out

        return res

    
    
    def androidpublisher_monetization_convert_region_prices(self, request: operations.AndroidpublisherMonetizationConvertRegionPricesRequest) -> operations.AndroidpublisherMonetizationConvertRegionPricesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationConvertRegionPricesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConvertRegionPricesResponse])
                res.convert_region_prices_response = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_archive(self, request: operations.AndroidpublisherMonetizationSubscriptionsArchiveRequest) -> operations.AndroidpublisherMonetizationSubscriptionsArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_activate(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_deactivate(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_delete(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_migrate_prices(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.migrate_base_plan_prices_response = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_offers_activate(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionOffer])
                res.subscription_offer = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_offers_create(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionOffer])
                res.subscription_offer = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_offers_deactivate(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionOffer])
                res.subscription_offer = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_offers_delete(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_offers_get(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionOffer])
                res.subscription_offer = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_offers_list(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSubscriptionOffersResponse])
                res.list_subscription_offers_response = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_base_plans_offers_patch(self, request: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest) -> operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionOffer])
                res.subscription_offer = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_create(self, request: operations.AndroidpublisherMonetizationSubscriptionsCreateRequest) -> operations.AndroidpublisherMonetizationSubscriptionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_delete(self, request: operations.AndroidpublisherMonetizationSubscriptionsDeleteRequest) -> operations.AndroidpublisherMonetizationSubscriptionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_monetization_subscriptions_get(self, request: operations.AndroidpublisherMonetizationSubscriptionsGetRequest) -> operations.AndroidpublisherMonetizationSubscriptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_list(self, request: operations.AndroidpublisherMonetizationSubscriptionsListRequest) -> operations.AndroidpublisherMonetizationSubscriptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSubscriptionsResponse])
                res.list_subscriptions_response = out

        return res

    
    
    def androidpublisher_monetization_subscriptions_patch(self, request: operations.AndroidpublisherMonetizationSubscriptionsPatchRequest) -> operations.AndroidpublisherMonetizationSubscriptionsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherMonetizationSubscriptionsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    
    def androidpublisher_orders_refund(self, request: operations.AndroidpublisherOrdersRefundRequest) -> operations.AndroidpublisherOrdersRefundResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherOrdersRefundResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_purchases_products_acknowledge(self, request: operations.AndroidpublisherPurchasesProductsAcknowledgeRequest) -> operations.AndroidpublisherPurchasesProductsAcknowledgeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesProductsAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_purchases_products_get(self, request: operations.AndroidpublisherPurchasesProductsGetRequest) -> operations.AndroidpublisherPurchasesProductsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesProductsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductPurchase])
                res.product_purchase = out

        return res

    
    
    def androidpublisher_purchases_subscriptions_acknowledge(self, request: operations.AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest) -> operations.AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_purchases_subscriptions_cancel(self, request: operations.AndroidpublisherPurchasesSubscriptionsCancelRequest) -> operations.AndroidpublisherPurchasesSubscriptionsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsCancelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_purchases_subscriptions_defer(self, request: operations.AndroidpublisherPurchasesSubscriptionsDeferRequest) -> operations.AndroidpublisherPurchasesSubscriptionsDeferResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsDeferResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionPurchasesDeferResponse])
                res.subscription_purchases_defer_response = out

        return res

    
    
    def androidpublisher_purchases_subscriptions_get(self, request: operations.AndroidpublisherPurchasesSubscriptionsGetRequest) -> operations.AndroidpublisherPurchasesSubscriptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionPurchase])
                res.subscription_purchase = out

        return res

    
    
    def androidpublisher_purchases_subscriptions_refund(self, request: operations.AndroidpublisherPurchasesSubscriptionsRefundRequest) -> operations.AndroidpublisherPurchasesSubscriptionsRefundResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsRefundResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_purchases_subscriptions_revoke(self, request: operations.AndroidpublisherPurchasesSubscriptionsRevokeRequest) -> operations.AndroidpublisherPurchasesSubscriptionsRevokeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsRevokeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_purchases_subscriptionsv2_get(self, request: operations.AndroidpublisherPurchasesSubscriptionsv2GetRequest) -> operations.AndroidpublisherPurchasesSubscriptionsv2GetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsv2GetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionPurchaseV2])
                res.subscription_purchase_v2 = out

        return res

    
    
    def androidpublisher_purchases_voidedpurchases_list(self, request: operations.AndroidpublisherPurchasesVoidedpurchasesListRequest) -> operations.AndroidpublisherPurchasesVoidedpurchasesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesVoidedpurchasesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoidedPurchasesListResponse])
                res.voided_purchases_list_response = out

        return res

    
    
    def androidpublisher_reviews_get(self, request: operations.AndroidpublisherReviewsGetRequest) -> operations.AndroidpublisherReviewsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/reviews/{reviewId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherReviewsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Review])
                res.review = out

        return res

    
    
    def androidpublisher_reviews_list(self, request: operations.AndroidpublisherReviewsListRequest) -> operations.AndroidpublisherReviewsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/reviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherReviewsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReviewsListResponse])
                res.reviews_list_response = out

        return res

    
    
    def androidpublisher_reviews_reply(self, request: operations.AndroidpublisherReviewsReplyRequest) -> operations.AndroidpublisherReviewsReplyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherReviewsReplyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReviewsReplyResponse])
                res.reviews_reply_response = out

        return res

    
    
    def androidpublisher_systemapks_variants_create(self, request: operations.AndroidpublisherSystemapksVariantsCreateRequest) -> operations.AndroidpublisherSystemapksVariantsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherSystemapksVariantsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variant])
                res.variant = out

        return res

    
    
    def androidpublisher_systemapks_variants_download(self, request: operations.AndroidpublisherSystemapksVariantsDownloadRequest) -> operations.AndroidpublisherSystemapksVariantsDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherSystemapksVariantsDownloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_systemapks_variants_get(self, request: operations.AndroidpublisherSystemapksVariantsGetRequest) -> operations.AndroidpublisherSystemapksVariantsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherSystemapksVariantsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variant])
                res.variant = out

        return res

    
    
    def androidpublisher_systemapks_variants_list(self, request: operations.AndroidpublisherSystemapksVariantsListRequest) -> operations.AndroidpublisherSystemapksVariantsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherSystemapksVariantsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemApksListResponse])
                res.system_apks_list_response = out

        return res

    
    
    def androidpublisher_users_create(self, request: operations.AndroidpublisherUsersCreateRequest) -> operations.AndroidpublisherUsersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/{parent}/users", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherUsersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    
    def androidpublisher_users_delete(self, request: operations.AndroidpublisherUsersDeleteRequest) -> operations.AndroidpublisherUsersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherUsersDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def androidpublisher_users_list(self, request: operations.AndroidpublisherUsersListRequest) -> operations.AndroidpublisherUsersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/{parent}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherUsersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUsersResponse])
                res.list_users_response = out

        return res

    
    
    def androidpublisher_users_patch(self, request: operations.AndroidpublisherUsersPatchRequest) -> operations.AndroidpublisherUsersPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/androidpublisher/v3/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherUsersPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    