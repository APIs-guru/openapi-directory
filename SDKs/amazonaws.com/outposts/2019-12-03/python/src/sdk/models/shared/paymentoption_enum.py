from dataclasses import dataclass, field
from enum import Enum

class PaymentOptionEnum(str, Enum):
    ALL_UPFRONT = "ALL_UPFRONT"
    NO_UPFRONT = "NO_UPFRONT"
    PARTIAL_UPFRONT = "PARTIAL_UPFRONT"

