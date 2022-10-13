from dataclasses import dataclass, field
from typing import Enum

class RepositoryAccessModeEnum(str, Enum):
    PLATFORM = "Platform"
    VPC = "Vpc"

