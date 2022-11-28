from dataclasses import dataclass, field
from enum import Enum

class SavingsPlanPaymentOptionEnum(str, Enum):
    ALL_UPFRONT = "All Upfront"
    PARTIAL_UPFRONT = "Partial Upfront"
    NO_UPFRONT = "No Upfront"

