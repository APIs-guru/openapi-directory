from dataclasses import dataclass, field
from enum import Enum

class AggregationFunctionEnum(str, Enum):
    AVG = "AVG"
    SUM = "SUM"

