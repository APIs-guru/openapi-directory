from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DistrictStatusStateEnum(str, Enum):
    RUNNING = "running"
    PENDING = "pending"
    ERROR = "error"
    PAUSED = "paused"


@dataclass_json
@dataclass
class DistrictStatus:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instant_login: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instant_login') }})
    last_sync: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_sync') }})
    launch_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launch_date') }})
    pause_end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pause_end') }})
    pause_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pause_start') }})
    sis_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sis_type') }})
    state: Optional[DistrictStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
