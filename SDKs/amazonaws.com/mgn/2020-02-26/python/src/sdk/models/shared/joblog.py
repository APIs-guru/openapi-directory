from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobLog:
    r"""JobLog
    Job log.
    """
    
    event: Optional[JobLogEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    event_data: Optional[JobLogEventData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventData') }})
    log_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDateTime') }})
    
