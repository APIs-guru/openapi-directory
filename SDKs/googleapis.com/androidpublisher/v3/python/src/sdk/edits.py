import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Edits:
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

    
    def androidpublisher_edits_apks_addexternallyhosted(self, request: operations.AndroidpublisherEditsApksAddexternallyhostedRequest) -> operations.AndroidpublisherEditsApksAddexternallyhostedResponse:
        r"""Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApksAddexternallyhostedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApksAddExternallyHostedResponse])
                res.apks_add_externally_hosted_response = out

        return res

    
    def androidpublisher_edits_apks_list(self, request: operations.AndroidpublisherEditsApksListRequest) -> operations.AndroidpublisherEditsApksListResponse:
        r"""Lists all current APKs of the app and edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApksListResponse])
                res.apks_list_response = out

        return res

    
    def androidpublisher_edits_apks_upload(self, request: operations.AndroidpublisherEditsApksUploadRequest) -> operations.AndroidpublisherEditsApksUploadResponse:
        r"""Uploads an APK and adds to the current edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApksUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Apk])
                res.apk = out

        return res

    
    def androidpublisher_edits_bundles_list(self, request: operations.AndroidpublisherEditsBundlesListRequest) -> operations.AndroidpublisherEditsBundlesListResponse:
        r"""Lists all current Android App Bundles of the app and edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsBundlesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BundlesListResponse])
                res.bundles_list_response = out

        return res

    
    def androidpublisher_edits_bundles_upload(self, request: operations.AndroidpublisherEditsBundlesUploadRequest) -> operations.AndroidpublisherEditsBundlesUploadResponse:
        r"""Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsBundlesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bundle])
                res.bundle = out

        return res

    
    def androidpublisher_edits_commit(self, request: operations.AndroidpublisherEditsCommitRequest) -> operations.AndroidpublisherEditsCommitResponse:
        r"""Commits an app edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}:commit", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppEdit])
                res.app_edit = out

        return res

    
    def androidpublisher_edits_countryavailability_get(self, request: operations.AndroidpublisherEditsCountryavailabilityGetRequest) -> operations.AndroidpublisherEditsCountryavailabilityGetResponse:
        r"""Gets country availability.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsCountryavailabilityGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrackCountryAvailability])
                res.track_country_availability = out

        return res

    
    def androidpublisher_edits_delete(self, request: operations.AndroidpublisherEditsDeleteRequest) -> operations.AndroidpublisherEditsDeleteResponse:
        r"""Deletes an app edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_deobfuscationfiles_upload(self, request: operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest) -> operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse:
        r"""Uploads a new deobfuscation file and attaches to the specified APK.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeobfuscationFilesUploadResponse])
                res.deobfuscation_files_upload_response = out

        return res

    
    def androidpublisher_edits_details_get(self, request: operations.AndroidpublisherEditsDetailsGetRequest) -> operations.AndroidpublisherEditsDetailsGetResponse:
        r"""Gets details of an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/details", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDetailsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppDetails])
                res.app_details = out

        return res

    
    def androidpublisher_edits_details_patch(self, request: operations.AndroidpublisherEditsDetailsPatchRequest) -> operations.AndroidpublisherEditsDetailsPatchResponse:
        r"""Patches details of an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/details", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDetailsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppDetails])
                res.app_details = out

        return res

    
    def androidpublisher_edits_details_update(self, request: operations.AndroidpublisherEditsDetailsUpdateRequest) -> operations.AndroidpublisherEditsDetailsUpdateResponse:
        r"""Updates details of an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/details", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDetailsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppDetails])
                res.app_details = out

        return res

    
    def androidpublisher_edits_expansionfiles_get(self, request: operations.AndroidpublisherEditsExpansionfilesGetRequest) -> operations.AndroidpublisherEditsExpansionfilesGetResponse:
        r"""Fetches the expansion file configuration for the specified APK.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExpansionFile])
                res.expansion_file = out

        return res

    
    def androidpublisher_edits_expansionfiles_patch(self, request: operations.AndroidpublisherEditsExpansionfilesPatchRequest) -> operations.AndroidpublisherEditsExpansionfilesPatchResponse:
        r"""Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExpansionFile])
                res.expansion_file = out

        return res

    
    def androidpublisher_edits_expansionfiles_update(self, request: operations.AndroidpublisherEditsExpansionfilesUpdateRequest) -> operations.AndroidpublisherEditsExpansionfilesUpdateResponse:
        r"""Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExpansionFile])
                res.expansion_file = out

        return res

    
    def androidpublisher_edits_expansionfiles_upload(self, request: operations.AndroidpublisherEditsExpansionfilesUploadRequest) -> operations.AndroidpublisherEditsExpansionfilesUploadResponse:
        r"""Uploads a new expansion file and attaches to the specified APK.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExpansionFilesUploadResponse])
                res.expansion_files_upload_response = out

        return res

    
    def androidpublisher_edits_get(self, request: operations.AndroidpublisherEditsGetRequest) -> operations.AndroidpublisherEditsGetResponse:
        r"""Gets an app edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppEdit])
                res.app_edit = out

        return res

    
    def androidpublisher_edits_images_delete(self, request: operations.AndroidpublisherEditsImagesDeleteRequest) -> operations.AndroidpublisherEditsImagesDeleteResponse:
        r"""Deletes the image (specified by id) from the edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_images_deleteall(self, request: operations.AndroidpublisherEditsImagesDeleteallRequest) -> operations.AndroidpublisherEditsImagesDeleteallResponse:
        r"""Deletes all images for the specified language and image type. Returns an empty response if no images are found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesDeleteallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesDeleteAllResponse])
                res.images_delete_all_response = out

        return res

    
    def androidpublisher_edits_images_list(self, request: operations.AndroidpublisherEditsImagesListRequest) -> operations.AndroidpublisherEditsImagesListResponse:
        r"""Lists all images. The response may be empty.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesListResponse])
                res.images_list_response = out

        return res

    
    def androidpublisher_edits_images_upload(self, request: operations.AndroidpublisherEditsImagesUploadRequest) -> operations.AndroidpublisherEditsImagesUploadResponse:
        r"""Uploads an image of the specified language and image type, and adds to the edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesUploadResponse])
                res.images_upload_response = out

        return res

    
    def androidpublisher_edits_insert(self, request: operations.AndroidpublisherEditsInsertRequest) -> operations.AndroidpublisherEditsInsertResponse:
        r"""Creates a new edit for an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppEdit])
                res.app_edit = out

        return res

    
    def androidpublisher_edits_listings_delete(self, request: operations.AndroidpublisherEditsListingsDeleteRequest) -> operations.AndroidpublisherEditsListingsDeleteResponse:
        r"""Deletes a localized store listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_listings_deleteall(self, request: operations.AndroidpublisherEditsListingsDeleteallRequest) -> operations.AndroidpublisherEditsListingsDeleteallResponse:
        r"""Deletes all store listings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsDeleteallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_listings_get(self, request: operations.AndroidpublisherEditsListingsGetRequest) -> operations.AndroidpublisherEditsListingsGetResponse:
        r"""Gets a localized store listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    def androidpublisher_edits_listings_list(self, request: operations.AndroidpublisherEditsListingsListRequest) -> operations.AndroidpublisherEditsListingsListResponse:
        r"""Lists all localized store listings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingsListResponse])
                res.listings_list_response = out

        return res

    
    def androidpublisher_edits_listings_patch(self, request: operations.AndroidpublisherEditsListingsPatchRequest) -> operations.AndroidpublisherEditsListingsPatchResponse:
        r"""Patches a localized store listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    def androidpublisher_edits_listings_update(self, request: operations.AndroidpublisherEditsListingsUpdateRequest) -> operations.AndroidpublisherEditsListingsUpdateResponse:
        r"""Creates or updates a localized store listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out

        return res

    
    def androidpublisher_edits_testers_get(self, request: operations.AndroidpublisherEditsTestersGetRequest) -> operations.AndroidpublisherEditsTestersGetResponse:
        r"""Gets testers. Note: Testers resource does not support email lists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTestersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Testers])
                res.testers = out

        return res

    
    def androidpublisher_edits_testers_patch(self, request: operations.AndroidpublisherEditsTestersPatchRequest) -> operations.AndroidpublisherEditsTestersPatchResponse:
        r"""Patches testers. Note: Testers resource does not support email lists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTestersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Testers])
                res.testers = out

        return res

    
    def androidpublisher_edits_testers_update(self, request: operations.AndroidpublisherEditsTestersUpdateRequest) -> operations.AndroidpublisherEditsTestersUpdateResponse:
        r"""Updates testers. Note: Testers resource does not support email lists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTestersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Testers])
                res.testers = out

        return res

    
    def androidpublisher_edits_tracks_get(self, request: operations.AndroidpublisherEditsTracksGetRequest) -> operations.AndroidpublisherEditsTracksGetResponse:
        r"""Gets a track.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Track])
                res.track = out

        return res

    
    def androidpublisher_edits_tracks_list(self, request: operations.AndroidpublisherEditsTracksListRequest) -> operations.AndroidpublisherEditsTracksListResponse:
        r"""Lists all tracks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TracksListResponse])
                res.tracks_list_response = out

        return res

    
    def androidpublisher_edits_tracks_patch(self, request: operations.AndroidpublisherEditsTracksPatchRequest) -> operations.AndroidpublisherEditsTracksPatchResponse:
        r"""Patches a track.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Track])
                res.track = out

        return res

    
    def androidpublisher_edits_tracks_update(self, request: operations.AndroidpublisherEditsTracksUpdateRequest) -> operations.AndroidpublisherEditsTracksUpdateResponse:
        r"""Updates a track.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Track])
                res.track = out

        return res

    
    def androidpublisher_edits_validate(self, request: operations.AndroidpublisherEditsValidateRequest) -> operations.AndroidpublisherEditsValidateResponse:
        r"""Validates an app edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/edits/{editId}:validate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppEdit])
                res.app_edit = out

        return res

    