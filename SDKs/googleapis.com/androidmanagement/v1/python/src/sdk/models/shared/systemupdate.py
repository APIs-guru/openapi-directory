from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SystemUpdateTypeEnum(str, Enum):
    SYSTEM_UPDATE_TYPE_UNSPECIFIED = "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
    AUTOMATIC = "AUTOMATIC"
    WINDOWED = "WINDOWED"
    POSTPONE = "POSTPONE"


@dataclass_json
@dataclass
class SystemUpdate:
    r"""SystemUpdate
    Configuration for managing system updates
    """
    
    end_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endMinutes') }})
    freeze_periods: Optional[List[FreezePeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freezePeriods') }})
    start_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startMinutes') }})
    type: Optional[SystemUpdateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
