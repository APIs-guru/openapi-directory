from dataclasses import dataclass, field
from typing import Enum

class ConfirmationStateEnum(str, Enum):
    CONFIRMED = "Confirmed"
    DENIED = "Denied"
    NONE = "None"

