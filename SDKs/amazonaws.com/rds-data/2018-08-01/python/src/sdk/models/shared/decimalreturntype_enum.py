from dataclasses import dataclass, field
from enum import Enum

class DecimalReturnTypeEnum(str, Enum):
    STRING = "STRING"
    DOUBLE_OR_LONG = "DOUBLE_OR_LONG"

