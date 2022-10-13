from dataclasses import dataclass, field
from typing import Enum

class MonitoringJobDefinitionSortKeyEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

