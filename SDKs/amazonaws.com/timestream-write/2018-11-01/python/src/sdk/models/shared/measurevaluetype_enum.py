from dataclasses import dataclass, field
from typing import Enum

class MeasureValueTypeEnum(str, Enum):
    DOUBLE = "DOUBLE"
    BIGINT = "BIGINT"
    VARCHAR = "VARCHAR"
    BOOLEAN = "BOOLEAN"

