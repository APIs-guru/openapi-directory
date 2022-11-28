from dataclasses import dataclass, field
from enum import Enum

class EventTypeEnum(str, Enum):
    SEND = "SEND"
    REJECT = "REJECT"
    BOUNCE = "BOUNCE"
    COMPLAINT = "COMPLAINT"
    DELIVERY = "DELIVERY"
    OPEN = "OPEN"
    CLICK = "CLICK"
    RENDERING_FAILURE = "RENDERING_FAILURE"
    DELIVERY_DELAY = "DELIVERY_DELAY"
    SUBSCRIPTION = "SUBSCRIPTION"

