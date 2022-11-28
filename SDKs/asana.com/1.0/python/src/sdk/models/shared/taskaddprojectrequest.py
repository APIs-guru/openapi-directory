from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaskAddProjectRequest:
    project: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    insert_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert_after') }})
    insert_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert_before') }})
    section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    
