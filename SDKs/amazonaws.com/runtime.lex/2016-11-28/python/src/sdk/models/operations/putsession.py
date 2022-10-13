from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutSessionPathParams:
    bot_alias: str = field(default=None, metadata={'path_param': { 'field_name': 'botAlias', 'style': 'simple', 'explode': False }})
    bot_name: str = field(default=None, metadata={'path_param': { 'field_name': 'botName', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSessionHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class PutSessionRequestBodyDialogAction:
    fulfillment_state: Optional[shared.FulfillmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentState' }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentName' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    message_format: Optional[shared.MessageFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageFormat' }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotToElicit' }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    type: Optional[shared.DialogActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutSessionRequestBody:
    active_contexts: Optional[List[shared.ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeContexts' }})
    dialog_action: Optional[PutSessionRequestBodyDialogAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogAction' }})
    recent_intent_summary_view: Optional[List[shared.IntentSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentIntentSummaryView' }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionAttributes' }})
    

@dataclass
class PutSessionRequest:
    path_params: PutSessionPathParams = field(default=None)
    headers: PutSessionHeaders = field(default=None)
    request: PutSessionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSessionResponse:
    bad_gateway_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    dependency_failed_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_acceptable_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    put_session_response: Optional[shared.PutSessionResponse] = field(default=None)
    status_code: int = field(default=None)
    
