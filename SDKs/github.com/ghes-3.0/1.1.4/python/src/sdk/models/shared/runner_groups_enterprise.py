from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RunnerGroupsEnterprise:
    allows_public_repositories: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_public_repositories') }})
    default: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runners_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners_url') }})
    visibility: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    selected_organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organizations_url') }})
    
