from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WaitActivity:
    r"""WaitActivity
    Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
    """
    
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    wait_time: Optional[WaitTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitTime') }})
    
