from dataclasses import dataclass, field
from enum import Enum

class LaunchDispositionEnum(str, Enum):
    STOPPED = "STOPPED"
    STARTED = "STARTED"

