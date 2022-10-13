from dataclasses import dataclass, field
from typing import Enum

class WorkspaceDirectoryStateEnum(str, Enum):
    REGISTERING = "REGISTERING"
    REGISTERED = "REGISTERED"
    DEREGISTERING = "DEREGISTERING"
    DEREGISTERED = "DEREGISTERED"
    ERROR = "ERROR"

