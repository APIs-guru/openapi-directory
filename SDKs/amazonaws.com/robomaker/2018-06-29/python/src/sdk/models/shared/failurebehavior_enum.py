from dataclasses import dataclass, field
from enum import Enum

class FailureBehaviorEnum(str, Enum):
    FAIL = "Fail"
    CONTINUE = "Continue"

