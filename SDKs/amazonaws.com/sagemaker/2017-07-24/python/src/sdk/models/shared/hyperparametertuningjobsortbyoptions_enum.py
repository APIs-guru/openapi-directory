from dataclasses import dataclass, field
from enum import Enum

class HyperParameterTuningJobSortByOptionsEnum(str, Enum):
    NAME = "Name"
    STATUS = "Status"
    CREATION_TIME = "CreationTime"

