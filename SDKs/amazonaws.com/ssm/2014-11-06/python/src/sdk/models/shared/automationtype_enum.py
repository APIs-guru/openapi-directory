from dataclasses import dataclass, field
from typing import Enum

class AutomationTypeEnum(str, Enum):
    CROSS_ACCOUNT = "CrossAccount"
    LOCAL = "Local"

