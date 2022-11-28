from dataclasses import dataclass, field
from enum import Enum

class PermissionTypeEnum(str, Enum):
    READONLY = "READONLY"
    CONTRIBUTOR = "CONTRIBUTOR"

