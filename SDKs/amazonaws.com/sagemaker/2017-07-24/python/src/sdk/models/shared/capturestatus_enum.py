from dataclasses import dataclass, field
from typing import Enum

class CaptureStatusEnum(str, Enum):
    STARTED = "Started"
    STOPPED = "Stopped"

