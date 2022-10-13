from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import districtadmin


@dataclass_json
@dataclass
class DistrictAdminsResponse:
    data: Optional[List[districtadmin.DistrictAdmin]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
