from dataclasses import dataclass, field
from enum import Enum

class DeploymentTargetEnum(str, Enum):
    GREENGRASS = "GREENGRASS"
    CLOUD = "CLOUD"

