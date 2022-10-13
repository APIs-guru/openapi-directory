from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recorddetail


@dataclass_json
@dataclass
class UpdateProvisionedProductOutput:
    record_detail: Optional[recorddetail.RecordDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordDetail' }})
    
