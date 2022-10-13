from dataclasses import dataclass, field
from typing import Enum

class PermissionTypeEnum(str, Enum):
    READONLY = "READONLY"
    CONTRIBUTOR = "CONTRIBUTOR"

