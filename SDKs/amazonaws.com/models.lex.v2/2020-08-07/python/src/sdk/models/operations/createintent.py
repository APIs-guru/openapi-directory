from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateIntentPathParams:
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(default=None, metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    locale_id: str = field(default=None, metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIntentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateIntentRequestBodyDialogCodeHook:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class CreateIntentRequestBodyFulfillmentCodeHook:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class CreateIntentRequestBodyIntentClosingSetting:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    closing_response: Optional[shared.ResponseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closingResponse' }})
    

@dataclass_json
@dataclass
class CreateIntentRequestBodyIntentConfirmationSetting:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    declination_response: Optional[shared.ResponseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declinationResponse' }})
    prompt_specification: Optional[shared.PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promptSpecification' }})
    

@dataclass_json
@dataclass
class CreateIntentRequestBodyKendraConfiguration:
    kendra_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraIndex' }})
    query_filter_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFilterString' }})
    query_filter_string_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFilterStringEnabled' }})
    

@dataclass_json
@dataclass
class CreateIntentRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dialog_code_hook: Optional[CreateIntentRequestBodyDialogCodeHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogCodeHook' }})
    fulfillment_code_hook: Optional[CreateIntentRequestBodyFulfillmentCodeHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentCodeHook' }})
    input_contexts: Optional[List[shared.InputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputContexts' }})
    intent_closing_setting: Optional[CreateIntentRequestBodyIntentClosingSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentClosingSetting' }})
    intent_confirmation_setting: Optional[CreateIntentRequestBodyIntentConfirmationSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentConfirmationSetting' }})
    intent_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentName' }})
    kendra_configuration: Optional[CreateIntentRequestBodyKendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraConfiguration' }})
    output_contexts: Optional[List[shared.OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputContexts' }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIntentSignature' }})
    sample_utterances: Optional[List[shared.SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleUtterances' }})
    

@dataclass
class CreateIntentRequest:
    path_params: CreateIntentPathParams = field(default=None)
    headers: CreateIntentHeaders = field(default=None)
    request: CreateIntentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateIntentResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_intent_response: Optional[shared.CreateIntentResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
