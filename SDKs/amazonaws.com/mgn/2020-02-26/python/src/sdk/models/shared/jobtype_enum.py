from dataclasses import dataclass, field
from typing import Enum

class JobTypeEnum(str, Enum):
    LAUNCH = "LAUNCH"
    TERMINATE = "TERMINATE"

