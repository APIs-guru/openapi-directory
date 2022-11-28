from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamTalent:
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('school') }})
    talent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('talent') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
