from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import district


@dataclass_json
@dataclass
class DistrictResponse:
    data: Optional[district.District] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
