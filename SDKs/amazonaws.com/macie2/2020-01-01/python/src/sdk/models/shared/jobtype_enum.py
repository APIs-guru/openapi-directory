from dataclasses import dataclass, field
from typing import Enum

class JobTypeEnum(str, Enum):
    ONE_TIME = "ONE_TIME"
    SCHEDULED = "SCHEDULED"

