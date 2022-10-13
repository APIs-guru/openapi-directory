from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import districtstatusresponse


@dataclass_json
@dataclass
class DistrictStatusResponses:
    data: Optional[List[districtstatusresponse.DistrictStatusResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
