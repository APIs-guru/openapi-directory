from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIResponseSuccess:
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    mb_in: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mbIn') }})
    mb_out: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mbOut') }})
    pdf: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
