from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateIntentPathParams:
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(default=None, metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    intent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'intentId', 'style': 'simple', 'explode': False }})
    locale_id: str = field(default=None, metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIntentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyDialogCodeHook:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyFulfillmentCodeHook:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyIntentClosingSetting:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    closing_response: Optional[shared.ResponseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closingResponse' }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyIntentConfirmationSetting:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    declination_response: Optional[shared.ResponseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declinationResponse' }})
    prompt_specification: Optional[shared.PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promptSpecification' }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBodyKendraConfiguration:
    kendra_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraIndex' }})
    query_filter_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFilterString' }})
    query_filter_string_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFilterStringEnabled' }})
    

@dataclass_json
@dataclass
class UpdateIntentRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dialog_code_hook: Optional[UpdateIntentRequestBodyDialogCodeHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogCodeHook' }})
    fulfillment_code_hook: Optional[UpdateIntentRequestBodyFulfillmentCodeHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentCodeHook' }})
    input_contexts: Optional[List[shared.InputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputContexts' }})
    intent_closing_setting: Optional[UpdateIntentRequestBodyIntentClosingSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentClosingSetting' }})
    intent_confirmation_setting: Optional[UpdateIntentRequestBodyIntentConfirmationSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentConfirmationSetting' }})
    intent_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentName' }})
    kendra_configuration: Optional[UpdateIntentRequestBodyKendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraConfiguration' }})
    output_contexts: Optional[List[shared.OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputContexts' }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIntentSignature' }})
    sample_utterances: Optional[List[shared.SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleUtterances' }})
    slot_priorities: Optional[List[shared.SlotPriority]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotPriorities' }})
    

@dataclass
class UpdateIntentRequest:
    path_params: UpdateIntentPathParams = field(default=None)
    headers: UpdateIntentHeaders = field(default=None)
    request: UpdateIntentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateIntentResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_intent_response: Optional[shared.UpdateIntentResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
