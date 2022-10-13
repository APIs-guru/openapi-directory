from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import districtstatus


@dataclass_json
@dataclass
class DistrictStatusResponse:
    data: Optional[districtstatus.DistrictStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
