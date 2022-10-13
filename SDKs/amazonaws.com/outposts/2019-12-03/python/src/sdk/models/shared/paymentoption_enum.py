from dataclasses import dataclass, field
from typing import Enum

class PaymentOptionEnum(str, Enum):
    ALL_UPFRONT = "ALL_UPFRONT"
    NO_UPFRONT = "NO_UPFRONT"
    PARTIAL_UPFRONT = "PARTIAL_UPFRONT"

