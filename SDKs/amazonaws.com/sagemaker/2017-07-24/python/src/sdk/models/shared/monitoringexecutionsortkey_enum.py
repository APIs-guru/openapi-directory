from dataclasses import dataclass, field
from typing import Enum

class MonitoringExecutionSortKeyEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    SCHEDULED_TIME = "ScheduledTime"
    STATUS = "Status"

