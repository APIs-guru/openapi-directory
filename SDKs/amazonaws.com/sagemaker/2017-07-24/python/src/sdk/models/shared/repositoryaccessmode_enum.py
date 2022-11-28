from dataclasses import dataclass, field
from enum import Enum

class RepositoryAccessModeEnum(str, Enum):
    PLATFORM = "Platform"
    VPC = "Vpc"

