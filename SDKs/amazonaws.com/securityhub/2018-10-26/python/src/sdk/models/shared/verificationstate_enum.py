from dataclasses import dataclass, field
from enum import Enum

class VerificationStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TRUE_POSITIVE = "TRUE_POSITIVE"
    FALSE_POSITIVE = "FALSE_POSITIVE"
    BENIGN_POSITIVE = "BENIGN_POSITIVE"

