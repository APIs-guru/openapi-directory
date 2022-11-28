from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WaitTime:
    r"""WaitTime
    Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.
    """
    
    wait_for: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitFor') }})
    wait_until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitUntil') }})
    
