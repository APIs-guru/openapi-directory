from dataclasses import dataclass, field
from enum import Enum

class ActivationStatusEnum(str, Enum):
    ACTIVATED = "ACTIVATED"
    NOT_ACTIVATED = "NOT_ACTIVATED"

