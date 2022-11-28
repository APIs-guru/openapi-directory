from dataclasses import dataclass, field
from enum import Enum

class AutomationTypeEnum(str, Enum):
    CROSS_ACCOUNT = "CrossAccount"
    LOCAL = "Local"

