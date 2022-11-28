from dataclasses import dataclass, field
from enum import Enum

class MlModelTypeEnum(str, Enum):
    REGRESSION = "REGRESSION"
    BINARY = "BINARY"
    MULTICLASS = "MULTICLASS"

