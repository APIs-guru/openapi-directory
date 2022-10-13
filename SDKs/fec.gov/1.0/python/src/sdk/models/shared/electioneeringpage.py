from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import seekinfo
from . import electioneering


@dataclass_json
@dataclass
class ElectioneeringPage:
    pagination: Optional[seekinfo.SeekInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[electioneering.Electioneering]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
