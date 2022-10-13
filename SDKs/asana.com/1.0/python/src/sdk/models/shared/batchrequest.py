from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchrequestaction


@dataclass_json
@dataclass
class BatchRequest:
    actions: Optional[List[batchrequestaction.BatchRequestAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    
