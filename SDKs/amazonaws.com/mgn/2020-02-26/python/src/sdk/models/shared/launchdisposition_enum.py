from dataclasses import dataclass, field
from typing import Enum

class LaunchDispositionEnum(str, Enum):
    STOPPED = "STOPPED"
    STARTED = "STARTED"

