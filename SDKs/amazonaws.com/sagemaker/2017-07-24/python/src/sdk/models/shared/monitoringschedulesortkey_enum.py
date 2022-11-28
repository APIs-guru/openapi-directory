from dataclasses import dataclass, field
from enum import Enum

class MonitoringScheduleSortKeyEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"
    STATUS = "Status"

