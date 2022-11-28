from dataclasses import dataclass, field
from enum import Enum

class ConfirmationStatusEnum(str, Enum):
    NONE = "None"
    CONFIRMED = "Confirmed"
    DENIED = "Denied"

