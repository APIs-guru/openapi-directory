from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createprintserverrequest


@dataclass_json
@dataclass
class BatchCreatePrintServersRequest:
    requests: Optional[List[createprintserverrequest.CreatePrintServerRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
