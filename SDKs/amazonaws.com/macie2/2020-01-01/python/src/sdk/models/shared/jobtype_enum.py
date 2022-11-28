from dataclasses import dataclass, field
from enum import Enum

class JobTypeEnum(str, Enum):
    ONE_TIME = "ONE_TIME"
    SCHEDULED = "SCHEDULED"

