from dataclasses import dataclass, field
from enum import Enum

class StateEnum(str, Enum):
    OFFLINE = "OFFLINE"
    ONLINE = "ONLINE"
    STARTING = "STARTING"
    STOPPING = "STOPPING"
    START_FAILED = "START_FAILED"
    STOP_FAILED = "STOP_FAILED"

