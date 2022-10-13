from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recordstatus_enum


@dataclass_json
@dataclass
class UpdateProvisionedProductPropertiesOutput:
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductId' }})
    provisioned_product_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductProperties' }})
    record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordId' }})
    status: Optional[recordstatus_enum.RecordStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
