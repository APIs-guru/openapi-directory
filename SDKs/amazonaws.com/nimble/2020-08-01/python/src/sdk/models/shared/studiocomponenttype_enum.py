from dataclasses import dataclass, field
from enum import Enum

class StudioComponentTypeEnum(str, Enum):
    ACTIVE_DIRECTORY = "ACTIVE_DIRECTORY"
    SHARED_FILE_SYSTEM = "SHARED_FILE_SYSTEM"
    COMPUTE_FARM = "COMPUTE_FARM"
    LICENSE_SERVICE = "LICENSE_SERVICE"
    CUSTOM = "CUSTOM"

