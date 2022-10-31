from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSlotPathParams:
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(default=None, metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    intent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'intentId', 'style': 'simple', 'explode': False }})
    locale_id: str = field(default=None, metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    slot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'slotId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSlotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSlotRequestBodyMultipleValuesSetting:
    allow_multiple_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMultipleValues' }})
    

@dataclass_json
@dataclass
class UpdateSlotRequestBodyObfuscationSetting:
    obfuscation_setting_type: Optional[shared.ObfuscationSettingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscationSettingType' }})
    

@dataclass_json
@dataclass
class UpdateSlotRequestBodyValueElicitationSetting:
    default_value_specification: Optional[shared.SlotDefaultValueSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValueSpecification' }})
    prompt_specification: Optional[shared.PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promptSpecification' }})
    sample_utterances: Optional[List[shared.SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleUtterances' }})
    slot_constraint: Optional[shared.SlotConstraintEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotConstraint' }})
    wait_and_continue_specification: Optional[shared.WaitAndContinueSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitAndContinueSpecification' }})
    

@dataclass_json
@dataclass
class UpdateSlotRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    multiple_values_setting: Optional[UpdateSlotRequestBodyMultipleValuesSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multipleValuesSetting' }})
    obfuscation_setting: Optional[UpdateSlotRequestBodyObfuscationSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscationSetting' }})
    slot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotName' }})
    slot_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeId' }})
    value_elicitation_setting: UpdateSlotRequestBodyValueElicitationSetting = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueElicitationSetting' }})
    

@dataclass
class UpdateSlotRequest:
    path_params: UpdateSlotPathParams = field(default=None)
    headers: UpdateSlotHeaders = field(default=None)
    request: UpdateSlotRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSlotResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_slot_response: Optional[shared.UpdateSlotResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
