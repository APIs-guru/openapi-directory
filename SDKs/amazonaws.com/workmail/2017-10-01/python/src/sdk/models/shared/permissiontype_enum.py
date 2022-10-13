from dataclasses import dataclass, field
from typing import Enum

class PermissionTypeEnum(str, Enum):
    FULL_ACCESS = "FULL_ACCESS"
    SEND_AS = "SEND_AS"
    SEND_ON_BEHALF = "SEND_ON_BEHALF"

