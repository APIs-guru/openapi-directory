from dataclasses import dataclass, field
from enum import Enum

class BlueprintTypeEnum(str, Enum):
    OS = "os"
    APP = "app"

