from dataclasses import dataclass, field
from enum import Enum

class ContainerServicePowerNameEnum(str, Enum):
    NANO = "nano"
    MICRO = "micro"
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"
    XLARGE = "xlarge"

