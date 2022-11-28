from dataclasses import dataclass, field
from enum import Enum

class CaptureStatusEnum(str, Enum):
    STARTED = "Started"
    STOPPED = "Stopped"

