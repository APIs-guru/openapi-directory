from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Function:
    r"""Function
    Function
    """
    
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    dollar_permissions: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$permissions') }})
    date_created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    date_updated: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateUpdated') }})
    events: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runtime: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    schedule: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    schedule_next: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleNext') }})
    schedule_previous: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulePrevious') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    vars: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vars') }})
    
