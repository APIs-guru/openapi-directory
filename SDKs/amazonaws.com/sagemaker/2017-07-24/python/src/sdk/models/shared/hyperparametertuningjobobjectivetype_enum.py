from dataclasses import dataclass, field
from typing import Enum

class HyperParameterTuningJobObjectiveTypeEnum(str, Enum):
    MAXIMIZE = "Maximize"
    MINIMIZE = "Minimize"

