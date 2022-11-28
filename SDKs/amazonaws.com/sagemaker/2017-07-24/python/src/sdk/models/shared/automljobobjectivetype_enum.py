from dataclasses import dataclass, field
from enum import Enum

class AutoMlJobObjectiveTypeEnum(str, Enum):
    MAXIMIZE = "Maximize"
    MINIMIZE = "Minimize"

