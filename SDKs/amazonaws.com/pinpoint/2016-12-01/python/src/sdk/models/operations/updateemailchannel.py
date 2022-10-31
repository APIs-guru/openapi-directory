from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateEmailChannelPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEmailChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateEmailChannelRequestBodyEmailChannelRequest:
    configuration_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSet' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromAddress' }})
    identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identity' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    

@dataclass_json
@dataclass
class UpdateEmailChannelRequestBody:
    email_channel_request: UpdateEmailChannelRequestBodyEmailChannelRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailChannelRequest' }})
    

@dataclass
class UpdateEmailChannelRequest:
    path_params: UpdateEmailChannelPathParams = field(default=None)
    headers: UpdateEmailChannelHeaders = field(default=None)
    request: UpdateEmailChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEmailChannelResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_email_channel_response: Optional[shared.UpdateEmailChannelResponse] = field(default=None)
    
