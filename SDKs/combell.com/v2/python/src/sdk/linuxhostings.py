import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class LinuxHostings:
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

    
    def add_scheduled_tasks(self, request: operations.AddScheduledTasksRequest) -> operations.AddScheduledTasksResponse:
        r"""Add a scheduled task
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/scheduledtasks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddScheduledTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def add_ssh_key(self, request: operations.AddSSHKeyRequest) -> operations.AddSSHKeyResponse:
        r"""Add a SSH key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/ssh/keys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def change_apcu(self, request: operations.ChangeApcuRequest) -> operations.ChangeApcuResponse:
        r"""Configure PHP APCu setting
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/phpsettings/apcu", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeApcuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def change_auto_redirect(self, request: operations.ChangeAutoRedirectRequest) -> operations.ChangeAutoRedirectResponse:
        r"""Configure auto redirect
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/sslsettings/{hostname}/autoredirect", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeAutoRedirectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def change_gzip_compression(self, request: operations.ChangeGzipCompressionRequest) -> operations.ChangeGzipCompressionResponse:
        r"""Enable/disable GZIP compression
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/settings/gzipcompression", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeGzipCompressionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def change_lets_encrypt(self, request: operations.ChangeLetsEncryptRequest) -> operations.ChangeLetsEncryptResponse:
        r"""Configure let's encrypt
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/sslsettings/{hostname}/letsencrypt", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeLetsEncryptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def change_php_memory_limit(self, request: operations.ChangePhpMemoryLimitRequest) -> operations.ChangePhpMemoryLimitResponse:
        r"""Configure PHP memory limit
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/phpsettings/memorylimit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangePhpMemoryLimitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def change_php_version(self, request: operations.ChangePhpVersionRequest) -> operations.ChangePhpVersionResponse:
        r"""Change the Linux hosting PHP version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/phpsettings/version", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangePhpVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def configure_ftp(self, request: operations.ConfigureFtpRequest) -> operations.ConfigureFtpResponse:
        r"""Configure FTP
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/ftp/configuration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureFtpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def configure_http2(self, request: operations.ConfigureHttp2Request) -> operations.ConfigureHttp2Response:
        r"""Configure HTTP/2
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/sites/{siteName}/http2/configuration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureHttp2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def configure_scheduled_task(self, request: operations.ConfigureScheduledTaskRequest) -> operations.ConfigureScheduledTaskResponse:
        r"""Configure a scheduled task
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureScheduledTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def configure_ssh(self, request: operations.ConfigureSSHRequest) -> operations.ConfigureSSHResponse:
        r"""Configure SSH
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/ssh/configuration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureSSHResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def create_host_header(self, request: operations.CreateHostHeaderRequest) -> operations.CreateHostHeaderResponse:
        r"""Create a host header
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/sites/{siteName}/hostheaders", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateHostHeaderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def create_subsite(self, request: operations.CreateSubsiteRequest) -> operations.CreateSubsiteResponse:
        r"""Create a subsite
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/subsites", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSubsiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def delete_scheduled_task(self, request: operations.DeleteScheduledTaskRequest) -> operations.DeleteScheduledTaskResponse:
        r"""Delete a scheduled task
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteScheduledTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def delete_ssh_key(self, request: operations.DeleteSSHKeyRequest) -> operations.DeleteSSHKeyResponse:
        r"""Delete a SSH key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/ssh/keys/{fingerprint}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def delete_subsite(self, request: operations.DeleteSubsiteRequest) -> operations.DeleteSubsiteResponse:
        r"""Delete a subsite
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/subsites/{siteName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubsiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_available_php_versions(self, request: operations.GetAvailablePhpVersionsRequest) -> operations.GetAvailablePhpVersionsResponse:
        r"""Get the available PHP versions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/phpsettings/availableversions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvailablePhpVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PhpVersion]])
                res.php_versions = out

        return res

    
    def get_linux_hosting(self, request: operations.GetLinuxHostingRequest) -> operations.GetLinuxHostingResponse:
        r"""Linux hosting detail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinuxHostingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinuxHostingDetail])
                res.linux_hosting_detail = out

        return res

    
    def get_linux_hostings(self, request: operations.GetLinuxHostingsRequest) -> operations.GetLinuxHostingsResponse:
        r"""Overview of linux hostings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/linuxhostings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinuxHostingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LinuxHosting]])
                res.linux_hostings = out

        return res

    
    def get_scheduled_task(self, request: operations.GetScheduledTaskRequest) -> operations.GetScheduledTaskResponse:
        r"""Get scheduled task detail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScheduledTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduledTask])
                res.scheduled_task = out

        return res

    
    def get_scheduled_tasks(self, request: operations.GetScheduledTasksRequest) -> operations.GetScheduledTasksResponse:
        r"""Overview of scheduled tasks
        Manage scheduled tasks which are also manageable via the control panel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/scheduledtasks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScheduledTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScheduledTask]])
                res.scheduled_tasks = out

        return res

    
    def get_ssh_keys(self, request: operations.GetSSHKeysRequest) -> operations.GetSSHKeysResponse:
        r"""Overview of SSH keys
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linuxhostings/{domainName}/ssh/keys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SSHKey]])
                res.ssh_keys = out

        return res

    