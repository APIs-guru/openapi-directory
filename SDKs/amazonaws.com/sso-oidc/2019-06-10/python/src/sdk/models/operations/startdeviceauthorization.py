from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartDeviceAuthorizationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class StartDeviceAuthorizationRequestBody:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    start_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startUrl' }})
    

@dataclass
class StartDeviceAuthorizationRequest:
    headers: StartDeviceAuthorizationHeaders = field(default=None)
    request: StartDeviceAuthorizationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartDeviceAuthorizationResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_client_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    slow_down_exception: Optional[Any] = field(default=None)
    start_device_authorization_response: Optional[shared.StartDeviceAuthorizationResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_client_exception: Optional[Any] = field(default=None)
    
