from dataclasses import dataclass, field
from enum import Enum

class BatchStrategyEnum(str, Enum):
    MULTI_RECORD = "MultiRecord"
    SINGLE_RECORD = "SingleRecord"

