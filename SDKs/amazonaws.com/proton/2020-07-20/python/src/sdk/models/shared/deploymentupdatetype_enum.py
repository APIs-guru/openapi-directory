from dataclasses import dataclass, field
from typing import Enum

class DeploymentUpdateTypeEnum(str, Enum):
    NONE = "NONE"
    CURRENT_VERSION = "CURRENT_VERSION"
    MINOR_VERSION = "MINOR_VERSION"
    MAJOR_VERSION = "MAJOR_VERSION"

