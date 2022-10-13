from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTokenHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateTokenRequestBody:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    device_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCode' }})
    grant_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantType' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUri' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    

@dataclass
class CreateTokenRequest:
    headers: CreateTokenHeaders = field(default=None)
    request: CreateTokenRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTokenResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    authorization_pending_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_token_response: Optional[shared.CreateTokenResponse] = field(default=None)
    expired_token_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_client_exception: Optional[Any] = field(default=None)
    invalid_grant_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invalid_scope_exception: Optional[Any] = field(default=None)
    slow_down_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_client_exception: Optional[Any] = field(default=None)
    unsupported_grant_type_exception: Optional[Any] = field(default=None)
    
