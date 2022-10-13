from dataclasses import dataclass, field
from typing import Enum

class PermissionEnum(str, Enum):
    ADMINISTRATOR = "ADMINISTRATOR"
    VIEWER = "VIEWER"

