from dataclasses import dataclass, field
from typing import Enum

class BatchStrategyEnum(str, Enum):
    MULTI_RECORD = "MultiRecord"
    SINGLE_RECORD = "SingleRecord"

