from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updaterowrequest


@dataclass_json
@dataclass
class BatchUpdateRowsRequest:
    requests: Optional[List[updaterowrequest.UpdateRowRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
