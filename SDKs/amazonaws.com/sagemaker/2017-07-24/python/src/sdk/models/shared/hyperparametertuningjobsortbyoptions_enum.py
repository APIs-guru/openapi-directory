from dataclasses import dataclass, field
from typing import Enum

class HyperParameterTuningJobSortByOptionsEnum(str, Enum):
    NAME = "Name"
    STATUS = "Status"
    CREATION_TIME = "CreationTime"

