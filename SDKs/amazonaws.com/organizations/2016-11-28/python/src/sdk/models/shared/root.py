from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policytypesummary


@dataclass_json
@dataclass
class Root:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    policy_types: Optional[List[policytypesummary.PolicyTypeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyTypes' }})
    
