from dataclasses import dataclass, field
from enum import Enum

class ConfirmationStateEnum(str, Enum):
    CONFIRMED = "Confirmed"
    DENIED = "Denied"
    NONE = "None"

