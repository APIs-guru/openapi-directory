from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datareplicationinitiationstep


@dataclass_json
@dataclass
class DataReplicationInitiation:
    next_attempt_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextAttemptDateTime' }})
    start_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDateTime' }})
    steps: Optional[List[datareplicationinitiationstep.DataReplicationInitiationStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    
