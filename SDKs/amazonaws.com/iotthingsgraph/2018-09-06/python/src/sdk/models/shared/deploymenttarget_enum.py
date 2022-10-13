from dataclasses import dataclass, field
from typing import Enum

class DeploymentTargetEnum(str, Enum):
    GREENGRASS = "GREENGRASS"
    CLOUD = "CLOUD"

