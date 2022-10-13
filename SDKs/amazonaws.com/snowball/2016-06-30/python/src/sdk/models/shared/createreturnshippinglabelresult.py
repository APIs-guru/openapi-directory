from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import shippinglabelstatus_enum


@dataclass_json
@dataclass
class CreateReturnShippingLabelResult:
    status: Optional[shippinglabelstatus_enum.ShippingLabelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
