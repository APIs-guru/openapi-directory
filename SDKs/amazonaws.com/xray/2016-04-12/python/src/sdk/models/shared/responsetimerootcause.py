from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responsetimerootcauseservice


@dataclass_json
@dataclass
class ResponseTimeRootCause:
    client_impacting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientImpacting' }})
    services: Optional[List[responsetimerootcauseservice.ResponseTimeRootCauseService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Services' }})
    
