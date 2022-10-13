from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import faultrootcauseentity


@dataclass_json
@dataclass
class FaultRootCauseService:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    entity_path: Optional[List[faultrootcauseentity.FaultRootCauseEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityPath' }})
    inferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inferred' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Names' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
