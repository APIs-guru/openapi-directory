from dataclasses import dataclass, field
from enum import Enum

class DialogActionTypeEnum(str, Enum):
    CLOSE = "Close"
    CONFIRM_INTENT = "ConfirmIntent"
    DELEGATE = "Delegate"
    ELICIT_INTENT = "ElicitIntent"
    ELICIT_SLOT = "ElicitSlot"

