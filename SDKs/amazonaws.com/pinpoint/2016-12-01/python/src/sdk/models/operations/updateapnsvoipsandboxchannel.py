from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateApnsVoipSandboxChannelPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateApnsVoipSandboxChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleId' }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    default_authentication_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAuthenticationMethod' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateKey' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TeamId' }})
    token_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenKey' }})
    token_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenKeyId' }})
    

@dataclass_json
@dataclass
class UpdateApnsVoipSandboxChannelRequestBody:
    apns_voip_sandbox_channel_request: UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNSVoipSandboxChannelRequest' }})
    

@dataclass
class UpdateApnsVoipSandboxChannelRequest:
    path_params: UpdateApnsVoipSandboxChannelPathParams = field(default=None)
    headers: UpdateApnsVoipSandboxChannelHeaders = field(default=None)
    request: UpdateApnsVoipSandboxChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateApnsVoipSandboxChannelResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_apns_voip_sandbox_channel_response: Optional[shared.UpdateApnsVoipSandboxChannelResponse] = field(default=None)
    
