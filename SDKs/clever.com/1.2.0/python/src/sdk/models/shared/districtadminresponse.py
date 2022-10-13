from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import districtadmin


@dataclass_json
@dataclass
class DistrictAdminResponse:
    data: Optional[districtadmin.DistrictAdmin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
