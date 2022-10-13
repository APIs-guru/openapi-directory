from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import stateelectionofficeinfo


@dataclass_json
@dataclass
class StateElectionOfficeInfoPage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[stateelectionofficeinfo.StateElectionOfficeInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
