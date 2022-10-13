from dataclasses import dataclass, field
from typing import Enum

class ConfirmationStatusEnum(str, Enum):
    NONE = "None"
    CONFIRMED = "Confirmed"
    DENIED = "Denied"

