from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateIntentPathParams:
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    intent_id: str = field(metadata={'path_param': { 'field_name': 'intentId', 'style': 'simple', 'explode': False }})
    locale_id: str = field(metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIntentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyDialogCodeHook:
    r"""UpdateIntentRequestBodyDialogCodeHook
    Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyFulfillmentCodeHook:
    r"""UpdateIntentRequestBodyFulfillmentCodeHook
    Determines if a Lambda function should be invoked for a specific intent.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyIntentClosingSetting:
    r"""UpdateIntentRequestBodyIntentClosingSetting
    Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    closing_response: Optional[shared.ResponseSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closingResponse') }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyIntentConfirmationSetting:
    r"""UpdateIntentRequestBodyIntentConfirmationSetting
    Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    declination_response: Optional[shared.ResponseSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('declinationResponse') }})
    prompt_specification: Optional[shared.PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promptSpecification') }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyKendraConfiguration:
    r"""UpdateIntentRequestBodyKendraConfiguration
    Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
    """
    
    kendra_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraIndex') }})
    query_filter_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFilterString') }})
    query_filter_string_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFilterStringEnabled') }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBody:
    intent_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dialog_code_hook: Optional[UpdateIntentRequestBodyDialogCodeHook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogCodeHook') }})
    fulfillment_code_hook: Optional[UpdateIntentRequestBodyFulfillmentCodeHook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentCodeHook') }})
    input_contexts: Optional[List[shared.InputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContexts') }})
    intent_closing_setting: Optional[UpdateIntentRequestBodyIntentClosingSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentClosingSetting') }})
    intent_confirmation_setting: Optional[UpdateIntentRequestBodyIntentConfirmationSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentConfirmationSetting') }})
    kendra_configuration: Optional[UpdateIntentRequestBodyKendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraConfiguration') }})
    output_contexts: Optional[List[shared.OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntentSignature') }})
    sample_utterances: Optional[List[shared.SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    slot_priorities: Optional[List[shared.SlotPriority]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotPriorities') }})
    

@dataclass
class UpdateIntentRequest:
    headers: UpdateIntentHeaders = field()
    path_params: UpdateIntentPathParams = field()
    request: UpdateIntentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateIntentResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_intent_response: Optional[shared.UpdateIntentResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
