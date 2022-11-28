from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RunnerGroupsOrg:
    allows_public_repositories: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_public_repositories') }})
    default: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inherited: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inherited') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runners_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners_url') }})
    visibility: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    inherited_allows_public_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inherited_allows_public_repositories') }})
    selected_repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repositories_url') }})
    
