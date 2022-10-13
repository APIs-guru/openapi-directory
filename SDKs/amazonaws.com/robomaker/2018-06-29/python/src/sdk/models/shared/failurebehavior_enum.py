from dataclasses import dataclass, field
from typing import Enum

class FailureBehaviorEnum(str, Enum):
    FAIL = "Fail"
    CONTINUE = "Continue"

