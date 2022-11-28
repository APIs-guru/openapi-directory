from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SelectedActions:
    github_owned_allowed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('github_owned_allowed') }})
    patterns_allowed: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns_allowed') }})
    verified_allowed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified_allowed') }})
    
