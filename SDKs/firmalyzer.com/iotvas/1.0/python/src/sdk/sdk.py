import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://firmalyzer.com/api/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def detect_device_detect_post(self, request: operations.DetectDeviceDetectPostRequest) -> operations.DetectDeviceDetectPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/device/detect"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DetectDeviceDetectPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInfo])
                res.device_info = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    
    def firmware_accounts_firmware_firmware_hash_accounts_get(self, request: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest) -> operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/accounts", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DefaultAccount]])
                res.default_accounts = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    
    def firmware_config_issues_firmware_firmware_hash_config_issues_get(self, request: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest) -> operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/config-issues", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ConfigIssue]])
                res.config_issues = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    
    def firmware_expired_certs_firmware_firmware_hash_expired_certs_get(self, request: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest) -> operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/expired-certs", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ExpiredCert]])
                res.expired_certs = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    
    def firmware_private_keys_firmware_firmware_hash_private_keys_get(self, request: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest) -> operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/private-keys", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CryptoKey]])
                res.crypto_keys = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    
    def firmware_risk_firmware_firmware_hash_risk_get(self, request: operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest) -> operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/risk", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirmwareRisk])
                res.firmware_risk = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    
    def firmware_weak_certs_firmware_firmware_hash_weak_certs_get(self, request: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest) -> operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/weak-certs", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WeakCert]])
                res.weak_certs = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    
    def firmware_weak_keys_firmware_firmware_hash_weak_keys_get(self, request: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest) -> operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firmware/{firmware_hash}/weak-keys", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CryptoKey]])
                res.crypto_keys = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    