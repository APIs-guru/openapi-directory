from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errorrootcauseentity


@dataclass_json
@dataclass
class ErrorRootCauseService:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    entity_path: Optional[List[errorrootcauseentity.ErrorRootCauseEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityPath' }})
    inferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inferred' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Names' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
