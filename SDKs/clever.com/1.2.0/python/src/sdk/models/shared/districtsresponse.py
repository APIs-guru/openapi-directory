from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import districtresponse


@dataclass_json
@dataclass
class DistrictsResponse:
    data: Optional[List[districtresponse.DistrictResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
