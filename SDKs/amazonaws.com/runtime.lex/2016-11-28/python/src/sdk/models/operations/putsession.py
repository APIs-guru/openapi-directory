from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutSessionPathParams:
    bot_alias: str = field(metadata={'path_param': { 'field_name': 'botAlias', 'style': 'simple', 'explode': False }})
    bot_name: str = field(metadata={'path_param': { 'field_name': 'botName', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSessionHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutSessionRequestBodyDialogAction:
    r"""PutSessionRequestBodyDialogAction
    Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
    """
    
    fulfillment_state: Optional[shared.FulfillmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentState') }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    message_format: Optional[shared.MessageFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    type: Optional[shared.DialogActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutSessionRequestBody:
    active_contexts: Optional[List[shared.ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeContexts') }})
    dialog_action: Optional[PutSessionRequestBodyDialogAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogAction') }})
    recent_intent_summary_view: Optional[List[shared.IntentSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentIntentSummaryView') }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionAttributes') }})
    

@dataclass
class PutSessionRequest:
    headers: PutSessionHeaders = field()
    path_params: PutSessionPathParams = field()
    request: PutSessionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSessionResponse:
    content_type: str = field()
    status_code: int = field()
    bad_gateway_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    dependency_failed_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_acceptable_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    put_session_response: Optional[shared.PutSessionResponse] = field(default=None)
    
