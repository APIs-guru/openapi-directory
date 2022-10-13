from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSlotTypePathParams:
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(default=None, metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    locale_id: str = field(default=None, metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    slot_type_id: str = field(default=None, metadata={'path_param': { 'field_name': 'slotTypeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSlotTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateSlotTypeRequestBodyValueSelectionSetting:
    regex_filter: Optional[shared.SlotValueRegexFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regexFilter' }})
    resolution_strategy: Optional[shared.SlotValueResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionStrategy' }})
    

@dataclass_json
@dataclass
class UpdateSlotTypeRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    parent_slot_type_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentSlotTypeSignature' }})
    slot_type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeName' }})
    slot_type_values: Optional[List[shared.SlotTypeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeValues' }})
    value_selection_setting: UpdateSlotTypeRequestBodyValueSelectionSetting = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueSelectionSetting' }})
    

@dataclass
class UpdateSlotTypeRequest:
    path_params: UpdateSlotTypePathParams = field(default=None)
    headers: UpdateSlotTypeHeaders = field(default=None)
    request: UpdateSlotTypeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSlotTypeResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_slot_type_response: Optional[shared.UpdateSlotTypeResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
