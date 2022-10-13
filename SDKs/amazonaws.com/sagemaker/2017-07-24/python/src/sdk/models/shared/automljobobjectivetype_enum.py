from dataclasses import dataclass, field
from typing import Enum

class AutoMlJobObjectiveTypeEnum(str, Enum):
    MAXIMIZE = "Maximize"
    MINIMIZE = "Minimize"

