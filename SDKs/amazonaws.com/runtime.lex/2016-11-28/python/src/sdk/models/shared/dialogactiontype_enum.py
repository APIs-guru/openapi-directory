from dataclasses import dataclass, field
from typing import Enum

class DialogActionTypeEnum(str, Enum):
    ELICIT_INTENT = "ElicitIntent"
    CONFIRM_INTENT = "ConfirmIntent"
    ELICIT_SLOT = "ElicitSlot"
    CLOSE = "Close"
    DELEGATE = "Delegate"

