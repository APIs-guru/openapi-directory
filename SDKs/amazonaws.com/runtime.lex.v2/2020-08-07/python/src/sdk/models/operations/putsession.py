from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutSessionPathParams:
    bot_alias_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botAliasId', 'style': 'simple', 'explode': False }})
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    locale_id: str = field(default=None, metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSessionHeaders:
    response_content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ResponseContentType' }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class PutSessionRequestBodySessionState:
    active_contexts: Optional[List[shared.ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeContexts' }})
    dialog_action: Optional[shared.DialogAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogAction' }})
    intent: Optional[shared.Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    originating_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originatingRequestId' }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionAttributes' }})
    

@dataclass_json
@dataclass
class PutSessionRequestBody:
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    request_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestAttributes' }})
    session_state: PutSessionRequestBodySessionState = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionState' }})
    

@dataclass
class PutSessionRequest:
    path_params: PutSessionPathParams = field(default=None)
    headers: PutSessionHeaders = field(default=None)
    request: PutSessionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSessionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_gateway_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    dependency_failed_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    put_session_response: Optional[shared.PutSessionResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
