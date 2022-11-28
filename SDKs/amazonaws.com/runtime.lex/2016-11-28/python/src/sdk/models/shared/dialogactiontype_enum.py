from dataclasses import dataclass, field
from enum import Enum

class DialogActionTypeEnum(str, Enum):
    ELICIT_INTENT = "ElicitIntent"
    CONFIRM_INTENT = "ConfirmIntent"
    ELICIT_SLOT = "ElicitSlot"
    CLOSE = "Close"
    DELEGATE = "Delegate"

