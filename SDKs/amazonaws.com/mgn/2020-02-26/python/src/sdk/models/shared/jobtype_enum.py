from dataclasses import dataclass, field
from enum import Enum

class JobTypeEnum(str, Enum):
    LAUNCH = "LAUNCH"
    TERMINATE = "TERMINATE"

