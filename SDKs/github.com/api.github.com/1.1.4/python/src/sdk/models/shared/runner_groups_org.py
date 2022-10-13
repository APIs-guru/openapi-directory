from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RunnerGroupsOrg:
    allows_public_repositories: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allows_public_repositories' }})
    default: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inherited: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inherited' }})
    inherited_allows_public_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inherited_allows_public_repositories' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    runners_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runners_url' }})
    selected_repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_repositories_url' }})
    visibility: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
