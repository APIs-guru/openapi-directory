from dataclasses import dataclass, field
from enum import Enum

class PatchOperationTypeEnum(str, Enum):
    SCAN = "Scan"
    INSTALL = "Install"

