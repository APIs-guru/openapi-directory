from dataclasses import dataclass, field
from enum import Enum

class BehaviorOnMxFailureEnum(str, Enum):
    USE_DEFAULT_VALUE = "USE_DEFAULT_VALUE"
    REJECT_MESSAGE = "REJECT_MESSAGE"

