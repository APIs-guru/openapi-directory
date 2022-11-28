from dataclasses import dataclass, field
from enum import Enum

class InitiatedByEnum(str, Enum):
    START_TEST = "START_TEST"
    START_CUTOVER = "START_CUTOVER"
    DIAGNOSTIC = "DIAGNOSTIC"
    TERMINATE = "TERMINATE"

