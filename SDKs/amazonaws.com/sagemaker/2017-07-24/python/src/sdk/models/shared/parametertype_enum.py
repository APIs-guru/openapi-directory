from dataclasses import dataclass, field
from typing import Enum

class ParameterTypeEnum(str, Enum):
    INTEGER = "Integer"
    CONTINUOUS = "Continuous"
    CATEGORICAL = "Categorical"
    FREE_TEXT = "FreeText"

