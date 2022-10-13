from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errorrootcauseservice


@dataclass_json
@dataclass
class ErrorRootCause:
    client_impacting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientImpacting' }})
    services: Optional[List[errorrootcauseservice.ErrorRootCauseService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Services' }})
    
