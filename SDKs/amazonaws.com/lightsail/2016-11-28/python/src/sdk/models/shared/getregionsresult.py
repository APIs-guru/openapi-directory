from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import region


@dataclass_json
@dataclass
class GetRegionsResult:
    regions: Optional[List[region.Region]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    
