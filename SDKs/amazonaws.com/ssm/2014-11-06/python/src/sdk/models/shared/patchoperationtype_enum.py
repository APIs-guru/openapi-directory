from dataclasses import dataclass, field
from typing import Enum

class PatchOperationTypeEnum(str, Enum):
    SCAN = "Scan"
    INSTALL = "Install"

