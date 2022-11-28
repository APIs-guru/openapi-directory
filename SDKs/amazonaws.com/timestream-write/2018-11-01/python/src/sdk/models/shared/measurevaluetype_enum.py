from dataclasses import dataclass, field
from enum import Enum

class MeasureValueTypeEnum(str, Enum):
    DOUBLE = "DOUBLE"
    BIGINT = "BIGINT"
    VARCHAR = "VARCHAR"
    BOOLEAN = "BOOLEAN"

