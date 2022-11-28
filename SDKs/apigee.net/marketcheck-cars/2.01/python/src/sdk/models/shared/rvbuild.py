from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RvBuild:
    r"""RvBuild
    Describes the RV specification
    """
    
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area') }})
    class_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('class') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    fuel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fuel_type') }})
    gvwr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gvwr') }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    made_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('made_in') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    sleeps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sleeps') }})
    slideouts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slideouts') }})
    transmission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmission') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
