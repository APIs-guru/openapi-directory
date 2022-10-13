from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createrowrequest


@dataclass_json
@dataclass
class BatchCreateRowsRequest:
    requests: Optional[List[createrowrequest.CreateRowRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
