from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SendUsersMessagesPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendUsersMessagesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SendUsersMessagesRequestBodySendUsersMessageRequest:
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Context' }})
    message_configuration: Optional[shared.DirectMessageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageConfiguration' }})
    template_configuration: Optional[shared.TemplateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateConfiguration' }})
    trace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TraceId' }})
    users: Optional[dict[str, shared.EndpointSendConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Users' }})
    

@dataclass_json
@dataclass
class SendUsersMessagesRequestBody:
    send_users_message_request: SendUsersMessagesRequestBodySendUsersMessageRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendUsersMessageRequest' }})
    

@dataclass
class SendUsersMessagesRequest:
    path_params: SendUsersMessagesPathParams = field(default=None)
    headers: SendUsersMessagesHeaders = field(default=None)
    request: SendUsersMessagesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendUsersMessagesResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    send_users_messages_response: Optional[shared.SendUsersMessagesResponse] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
