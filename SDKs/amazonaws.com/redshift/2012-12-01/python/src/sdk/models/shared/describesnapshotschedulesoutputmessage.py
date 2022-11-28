from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSnapshotSchedulesOutputMessage:
    marker: Optional[str] = field(default=None)
    snapshot_schedules: Optional[List[SnapshotSchedule]] = field(default=None)
    
