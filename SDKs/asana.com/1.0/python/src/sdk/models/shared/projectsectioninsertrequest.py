from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProjectSectionInsertRequest:
    project: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    section: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    after_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('after_section') }})
    before_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('before_section') }})
    
