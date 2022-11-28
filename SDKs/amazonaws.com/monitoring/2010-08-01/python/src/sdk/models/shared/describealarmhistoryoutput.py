from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAlarmHistoryOutput:
    alarm_history_items: Optional[List[AlarmHistoryItem]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
