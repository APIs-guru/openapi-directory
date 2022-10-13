from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import faultrootcauseservice


@dataclass_json
@dataclass
class FaultRootCause:
    client_impacting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientImpacting' }})
    services: Optional[List[faultrootcauseservice.FaultRootCauseService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Services' }})
    
