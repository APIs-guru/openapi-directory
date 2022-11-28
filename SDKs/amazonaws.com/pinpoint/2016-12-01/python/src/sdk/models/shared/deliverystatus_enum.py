from dataclasses import dataclass, field
from enum import Enum

class DeliveryStatusEnum(str, Enum):
    SUCCESSFUL = "SUCCESSFUL"
    THROTTLED = "THROTTLED"
    TEMPORARY_FAILURE = "TEMPORARY_FAILURE"
    PERMANENT_FAILURE = "PERMANENT_FAILURE"
    UNKNOWN_FAILURE = "UNKNOWN_FAILURE"
    OPT_OUT = "OPT_OUT"
    DUPLICATE = "DUPLICATE"

