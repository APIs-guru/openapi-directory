from dataclasses import dataclass, field
from enum import Enum

class IntentStateEnum(str, Enum):
    FAILED = "Failed"
    FULFILLED = "Fulfilled"
    IN_PROGRESS = "InProgress"
    READY_FOR_FULFILLMENT = "ReadyForFulfillment"
    WAITING = "Waiting"

