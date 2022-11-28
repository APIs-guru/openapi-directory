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
class UpdateActivityRequest:
    report: QueueActivityReportEventEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_activity: UserActivity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userActivity') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    constraints: Optional[Constraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    now_playing: Optional[PlayerContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nowPlaying') }})
    previously_playing: Optional[PlayerContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previouslyPlaying') }})
    
