from dataclasses import dataclass, field
from typing import Enum

class FirstBootEnum(str, Enum):
    WAITING = "WAITING"
    SUCCEEDED = "SUCCEEDED"
    UNKNOWN = "UNKNOWN"
    STOPPED = "STOPPED"

