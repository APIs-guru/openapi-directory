from dataclasses import dataclass, field
from enum import Enum

class MonitoringExecutionSortKeyEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    SCHEDULED_TIME = "ScheduledTime"
    STATUS = "Status"

