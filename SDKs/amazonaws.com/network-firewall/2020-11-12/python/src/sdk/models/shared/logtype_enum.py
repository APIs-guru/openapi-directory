from dataclasses import dataclass, field
from typing import Enum

class LogTypeEnum(str, Enum):
    ALERT = "ALERT"
    FLOW = "FLOW"

