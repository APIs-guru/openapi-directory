from dataclasses import dataclass, field
from typing import Enum

class ContainerServicePowerNameEnum(str, Enum):
    NANO = "nano"
    MICRO = "micro"
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"
    XLARGE = "xlarge"

