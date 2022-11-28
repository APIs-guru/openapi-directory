from dataclasses import dataclass, field
from enum import Enum

class WorkspaceDirectoryStateEnum(str, Enum):
    REGISTERING = "REGISTERING"
    REGISTERED = "REGISTERED"
    DEREGISTERING = "DEREGISTERING"
    DEREGISTERED = "DEREGISTERED"
    ERROR = "ERROR"

