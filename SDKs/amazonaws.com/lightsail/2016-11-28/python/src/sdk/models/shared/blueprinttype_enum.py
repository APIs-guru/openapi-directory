from dataclasses import dataclass, field
from typing import Enum

class BlueprintTypeEnum(str, Enum):
    OS = "os"
    APP = "app"

