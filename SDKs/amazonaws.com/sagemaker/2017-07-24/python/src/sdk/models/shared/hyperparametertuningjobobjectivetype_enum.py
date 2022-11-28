from dataclasses import dataclass, field
from enum import Enum

class HyperParameterTuningJobObjectiveTypeEnum(str, Enum):
    MAXIMIZE = "Maximize"
    MINIMIZE = "Minimize"

