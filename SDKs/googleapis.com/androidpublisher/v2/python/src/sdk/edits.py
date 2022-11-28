import requests
from sdk.models import operations
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

    
    def androidpublisher_edits_apklistings_delete(self, request: operations.AndroidpublisherEditsApklistingsDeleteRequest) -> operations.AndroidpublisherEditsApklistingsDeleteResponse:
        r"""Deletes the APK-specific localized listing for a specified APK and language code.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApklistingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_apklistings_deleteall(self, request: operations.AndroidpublisherEditsApklistingsDeleteallRequest) -> operations.AndroidpublisherEditsApklistingsDeleteallResponse:
        r"""Deletes all the APK-specific localized listings for a specified APK.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApklistingsDeleteallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_apklistings_get(self, request: operations.AndroidpublisherEditsApklistingsGetRequest) -> operations.AndroidpublisherEditsApklistingsGetResponse:
        r"""Fetches the APK-specific localized listing for a specified APK and language code.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApklistingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_apklistings_list(self, request: operations.AndroidpublisherEditsApklistingsListRequest) -> operations.AndroidpublisherEditsApklistingsListResponse:
        r"""Lists all the APK-specific localized listings for a specified APK.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApklistingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_apklistings_patch(self, request: operations.AndroidpublisherEditsApklistingsPatchRequest) -> operations.AndroidpublisherEditsApklistingsPatchResponse:
        r"""Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApklistingsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_apklistings_update(self, request: operations.AndroidpublisherEditsApklistingsUpdateRequest) -> operations.AndroidpublisherEditsApklistingsUpdateResponse:
        r"""Updates or creates the APK-specific localized listing for a specified APK and language code.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApklistingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_apks_addexternallyhosted(self, request: operations.AndroidpublisherEditsApksAddexternallyhostedRequest) -> operations.AndroidpublisherEditsApksAddexternallyhostedResponse:
        r"""Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/externallyHosted", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_apks_list(self, request: operations.AndroidpublisherEditsApksListRequest) -> operations.AndroidpublisherEditsApksListResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_apks_upload(self, request: operations.AndroidpublisherEditsApksUploadRequest) -> operations.AndroidpublisherEditsApksUploadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsApksUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_bundles_list(self, request: operations.AndroidpublisherEditsBundlesListRequest) -> operations.AndroidpublisherEditsBundlesListResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/bundles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsBundlesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_bundles_upload(self, request: operations.AndroidpublisherEditsBundlesUploadRequest) -> operations.AndroidpublisherEditsBundlesUploadResponse:
        r"""Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/bundles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsBundlesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_commit(self, request: operations.AndroidpublisherEditsCommitRequest) -> operations.AndroidpublisherEditsCommitResponse:
        r"""Commits/applies the changes made in this edit back to the app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}:commit", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_delete(self, request: operations.AndroidpublisherEditsDeleteRequest) -> operations.AndroidpublisherEditsDeleteResponse:
        r"""Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_deobfuscationfiles_upload(self, request: operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest) -> operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse:
        r"""Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_details_get(self, request: operations.AndroidpublisherEditsDetailsGetRequest) -> operations.AndroidpublisherEditsDetailsGetResponse:
        r"""Fetches app details for this edit. This includes the default language and developer support contact information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/details", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsDetailsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_details_patch(self, request: operations.AndroidpublisherEditsDetailsPatchRequest) -> operations.AndroidpublisherEditsDetailsPatchResponse:
        r"""Updates app details for this edit. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/details", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_details_update(self, request: operations.AndroidpublisherEditsDetailsUpdateRequest) -> operations.AndroidpublisherEditsDetailsUpdateResponse:
        r"""Updates app details for this edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/details", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_expansionfiles_get(self, request: operations.AndroidpublisherEditsExpansionfilesGetRequest) -> operations.AndroidpublisherEditsExpansionfilesGetResponse:
        r"""Fetches the Expansion File configuration for the APK specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_expansionfiles_patch(self, request: operations.AndroidpublisherEditsExpansionfilesPatchRequest) -> operations.AndroidpublisherEditsExpansionfilesPatchResponse:
        r"""Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_expansionfiles_update(self, request: operations.AndroidpublisherEditsExpansionfilesUpdateRequest) -> operations.AndroidpublisherEditsExpansionfilesUpdateResponse:
        r"""Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_expansionfiles_upload(self, request: operations.AndroidpublisherEditsExpansionfilesUploadRequest) -> operations.AndroidpublisherEditsExpansionfilesUploadResponse:
        r"""Uploads and attaches a new Expansion File to the APK specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsExpansionfilesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_get(self, request: operations.AndroidpublisherEditsGetRequest) -> operations.AndroidpublisherEditsGetResponse:
        r"""Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_images_delete(self, request: operations.AndroidpublisherEditsImagesDeleteRequest) -> operations.AndroidpublisherEditsImagesDeleteResponse:
        r"""Deletes the image (specified by id) from the edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_images_deleteall(self, request: operations.AndroidpublisherEditsImagesDeleteallRequest) -> operations.AndroidpublisherEditsImagesDeleteallResponse:
        r"""Deletes all images for the specified language and image type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesDeleteallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_images_list(self, request: operations.AndroidpublisherEditsImagesListRequest) -> operations.AndroidpublisherEditsImagesListResponse:
        r"""Lists all images for the specified language and image type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_images_upload(self, request: operations.AndroidpublisherEditsImagesUploadRequest) -> operations.AndroidpublisherEditsImagesUploadResponse:
        r"""Uploads a new image and adds it to the list of images for the specified language and image type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings/{language}/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsImagesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_insert(self, request: operations.AndroidpublisherEditsInsertRequest) -> operations.AndroidpublisherEditsInsertResponse:
        r"""Creates a new edit for an app, populated with the app's current state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_listings_delete(self, request: operations.AndroidpublisherEditsListingsDeleteRequest) -> operations.AndroidpublisherEditsListingsDeleteResponse:
        r"""Deletes the specified localized store listing from an edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_listings_deleteall(self, request: operations.AndroidpublisherEditsListingsDeleteallRequest) -> operations.AndroidpublisherEditsListingsDeleteallResponse:
        r"""Deletes all localized listings from an edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsDeleteallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_edits_listings_get(self, request: operations.AndroidpublisherEditsListingsGetRequest) -> operations.AndroidpublisherEditsListingsGetResponse:
        r"""Fetches information about a localized store listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_listings_list(self, request: operations.AndroidpublisherEditsListingsListRequest) -> operations.AndroidpublisherEditsListingsListResponse:
        r"""Returns all of the localized store listings attached to this edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsListingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_listings_patch(self, request: operations.AndroidpublisherEditsListingsPatchRequest) -> operations.AndroidpublisherEditsListingsPatchResponse:
        r"""Creates or updates a localized store listing. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_listings_update(self, request: operations.AndroidpublisherEditsListingsUpdateRequest) -> operations.AndroidpublisherEditsListingsUpdateResponse:
        r"""Creates or updates a localized store listing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/listings/{language}", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_testers_get(self, request: operations.AndroidpublisherEditsTestersGetRequest) -> operations.AndroidpublisherEditsTestersGetResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTestersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_testers_patch(self, request: operations.AndroidpublisherEditsTestersPatchRequest) -> operations.AndroidpublisherEditsTestersPatchResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_testers_update(self, request: operations.AndroidpublisherEditsTestersUpdateRequest) -> operations.AndroidpublisherEditsTestersUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/testers/{track}", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_tracks_get(self, request: operations.AndroidpublisherEditsTracksGetRequest) -> operations.AndroidpublisherEditsTracksGetResponse:
        r"""Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_tracks_list(self, request: operations.AndroidpublisherEditsTracksListRequest) -> operations.AndroidpublisherEditsTracksListResponse:
        r"""Lists all the track configurations for this edit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsTracksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_tracks_patch(self, request: operations.AndroidpublisherEditsTracksPatchRequest) -> operations.AndroidpublisherEditsTracksPatchResponse:
        r"""Updates the track configuration for the specified track type. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_tracks_update(self, request: operations.AndroidpublisherEditsTracksUpdateRequest) -> operations.AndroidpublisherEditsTracksUpdateResponse:
        r"""Updates the track configuration for the specified track type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}/tracks/{track}", request.path_params)
        
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
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_edits_validate(self, request: operations.AndroidpublisherEditsValidateRequest) -> operations.AndroidpublisherEditsValidateResponse:
        r"""Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/edits/{editId}:validate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherEditsValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    