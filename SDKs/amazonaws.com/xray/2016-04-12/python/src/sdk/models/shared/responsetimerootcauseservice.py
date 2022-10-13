from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responsetimerootcauseentity


@dataclass_json
@dataclass
class ResponseTimeRootCauseService:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    entity_path: Optional[List[responsetimerootcauseentity.ResponseTimeRootCauseEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityPath' }})
    inferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inferred' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Names' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
