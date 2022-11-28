from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RunnerNoLabels:
    busy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('busy') }})
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
