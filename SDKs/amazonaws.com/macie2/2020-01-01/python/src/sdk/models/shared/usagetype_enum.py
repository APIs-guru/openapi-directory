from dataclasses import dataclass, field
from typing import Enum

class UsageTypeEnum(str, Enum):
    DATA_INVENTORY_EVALUATION = "DATA_INVENTORY_EVALUATION"
    SENSITIVE_DATA_DISCOVERY = "SENSITIVE_DATA_DISCOVERY"

