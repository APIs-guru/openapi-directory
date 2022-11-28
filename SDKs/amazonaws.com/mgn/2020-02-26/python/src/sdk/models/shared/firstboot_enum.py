from dataclasses import dataclass, field
from enum import Enum

class FirstBootEnum(str, Enum):
    WAITING = "WAITING"
    SUCCEEDED = "SUCCEEDED"
    UNKNOWN = "UNKNOWN"
    STOPPED = "STOPPED"

