from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkType:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
