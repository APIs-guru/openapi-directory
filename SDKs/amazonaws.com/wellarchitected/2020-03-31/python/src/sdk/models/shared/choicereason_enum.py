from dataclasses import dataclass, field
from enum import Enum

class ChoiceReasonEnum(str, Enum):
    OUT_OF_SCOPE = "OUT_OF_SCOPE"
    BUSINESS_PRIORITIES = "BUSINESS_PRIORITIES"
    ARCHITECTURE_CONSTRAINTS = "ARCHITECTURE_CONSTRAINTS"
    OTHER = "OTHER"
    NONE = "NONE"

