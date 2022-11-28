from dataclasses import dataclass, field
from enum import Enum

class DialogStateEnum(str, Enum):
    ELICIT_INTENT = "ElicitIntent"
    CONFIRM_INTENT = "ConfirmIntent"
    ELICIT_SLOT = "ElicitSlot"
    FULFILLED = "Fulfilled"
    READY_FOR_FULFILLMENT = "ReadyForFulfillment"
    FAILED = "Failed"

