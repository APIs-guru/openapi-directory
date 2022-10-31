from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutSlotTypePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSlotTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutSlotTypeRequestBodyValueSelectionStrategyEnum(str, Enum):
    ORIGINAL_VALUE = "ORIGINAL_VALUE"
    TOP_RESOLUTION = "TOP_RESOLUTION"


@dataclass_json
@dataclass
class PutSlotTypeRequestBody:
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    create_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enumeration_values: Optional[List[shared.EnumerationValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumerationValues' }})
    parent_slot_type_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentSlotTypeSignature' }})
    slot_type_configurations: Optional[List[shared.SlotTypeConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeConfigurations' }})
    value_selection_strategy: Optional[PutSlotTypeRequestBodyValueSelectionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueSelectionStrategy' }})
    

@dataclass
class PutSlotTypeRequest:
    path_params: PutSlotTypePathParams = field(default=None)
    headers: PutSlotTypeHeaders = field(default=None)
    request: PutSlotTypeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSlotTypeResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    put_slot_type_response: Optional[shared.PutSlotTypeResponse] = field(default=None)
    status_code: int = field(default=None)
    
