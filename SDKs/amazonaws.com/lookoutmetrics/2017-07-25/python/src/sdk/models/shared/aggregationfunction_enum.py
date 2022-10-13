from dataclasses import dataclass, field
from typing import Enum

class AggregationFunctionEnum(str, Enum):
    AVG = "AVG"
    SUM = "SUM"

