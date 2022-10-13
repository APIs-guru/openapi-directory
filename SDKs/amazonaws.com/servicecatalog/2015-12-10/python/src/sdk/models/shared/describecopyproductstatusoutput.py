from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import copyproductstatus_enum


@dataclass_json
@dataclass
class DescribeCopyProductStatusOutput:
    copy_product_status: Optional[copyproductstatus_enum.CopyProductStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyProductStatus' }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetail' }})
    target_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetProductId' }})
    
