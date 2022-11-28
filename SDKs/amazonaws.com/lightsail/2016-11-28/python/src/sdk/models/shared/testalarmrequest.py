from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestAlarmRequest:
    alarm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmName') }})
    state: AlarmStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
