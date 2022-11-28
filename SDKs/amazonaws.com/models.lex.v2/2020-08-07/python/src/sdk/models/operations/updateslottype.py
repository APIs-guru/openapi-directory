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
class UpdateSlotTypePathParams:
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    locale_id: str = field(metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    slot_type_id: str = field(metadata={'path_param': { 'field_name': 'slotTypeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSlotTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSlotTypeRequestBodyValueSelectionSetting:
    r"""UpdateSlotTypeRequestBodyValueSelectionSetting
    Contains settings used by Amazon Lex to select a slot value.
    """
    
    regex_filter: Optional[shared.SlotValueRegexFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexFilter') }})
    resolution_strategy: Optional[shared.SlotValueResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStrategy') }})
    

@dataclass_json
@dataclass
class UpdateSlotTypeRequestBody:
    slot_type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeName') }})
    value_selection_setting: UpdateSlotTypeRequestBodyValueSelectionSetting = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueSelectionSetting') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    parent_slot_type_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentSlotTypeSignature') }})
    slot_type_values: Optional[List[shared.SlotTypeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeValues') }})
    

@dataclass
class UpdateSlotTypeRequest:
    headers: UpdateSlotTypeHeaders = field()
    path_params: UpdateSlotTypePathParams = field()
    request: UpdateSlotTypeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSlotTypeResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_slot_type_response: Optional[shared.UpdateSlotTypeResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
