from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TargetLocation:
    accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accounts' }})
    execution_role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleName' }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Regions' }})
    target_location_max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLocationMaxConcurrency' }})
    target_location_max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLocationMaxErrors' }})
    
