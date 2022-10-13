from dataclasses import dataclass, field
from typing import Enum

class MlModelTypeEnum(str, Enum):
    REGRESSION = "REGRESSION"
    BINARY = "BINARY"
    MULTICLASS = "MULTICLASS"

