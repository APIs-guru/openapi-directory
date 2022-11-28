from dataclasses import dataclass, field
from enum import Enum

class ProvisionedProductStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    UNDER_CHANGE = "UNDER_CHANGE"
    TAINTED = "TAINTED"
    ERROR = "ERROR"
    PLAN_IN_PROGRESS = "PLAN_IN_PROGRESS"

