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
class CreateSlotPathParams:
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    intent_id: str = field(metadata={'path_param': { 'field_name': 'intentId', 'style': 'simple', 'explode': False }})
    locale_id: str = field(metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSlotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSlotRequestBodyMultipleValuesSetting:
    r"""CreateSlotRequestBodyMultipleValuesSetting
    Indicates whether a slot can return multiple values.
    """
    
    allow_multiple_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultipleValues') }})
    

@dataclass_json
@dataclass
class CreateSlotRequestBodyObfuscationSetting:
    r"""CreateSlotRequestBodyObfuscationSetting
    Determines whether Amazon Lex obscures slot values in conversation logs. 
    """
    
    obfuscation_setting_type: Optional[shared.ObfuscationSettingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscationSettingType') }})
    

@dataclass_json
@dataclass
class CreateSlotRequestBodyValueElicitationSetting:
    r"""CreateSlotRequestBodyValueElicitationSetting
    Settings that you can use for eliciting a slot value.
    """
    
    default_value_specification: Optional[shared.SlotDefaultValueSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueSpecification') }})
    prompt_specification: Optional[shared.PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promptSpecification') }})
    sample_utterances: Optional[List[shared.SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    slot_constraint: Optional[shared.SlotConstraintEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotConstraint') }})
    wait_and_continue_specification: Optional[shared.WaitAndContinueSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitAndContinueSpecification') }})
    

@dataclass_json
@dataclass
class CreateSlotRequestBody:
    slot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotName') }})
    slot_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeId') }})
    value_elicitation_setting: CreateSlotRequestBodyValueElicitationSetting = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueElicitationSetting') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    multiple_values_setting: Optional[CreateSlotRequestBodyMultipleValuesSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleValuesSetting') }})
    obfuscation_setting: Optional[CreateSlotRequestBodyObfuscationSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscationSetting') }})
    

@dataclass
class CreateSlotRequest:
    headers: CreateSlotHeaders = field()
    path_params: CreateSlotPathParams = field()
    request: CreateSlotRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSlotResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    create_slot_response: Optional[shared.CreateSlotResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
