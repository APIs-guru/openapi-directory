from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import alarmstate_enum


@dataclass_json
@dataclass
class TestAlarmRequest:
    alarm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmName' }})
    state: alarmstate_enum.AlarmStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
