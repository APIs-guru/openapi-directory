from dataclasses import dataclass, field
from enum import Enum

class PermissionEnum(str, Enum):
    ADMINISTRATOR = "ADMINISTRATOR"
    VIEWER = "VIEWER"

