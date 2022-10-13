from dataclasses import dataclass, field
from typing import Enum

class ActivationStatusEnum(str, Enum):
    ACTIVATED = "ACTIVATED"
    NOT_ACTIVATED = "NOT_ACTIVATED"

