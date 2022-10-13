from dataclasses import dataclass, field
from typing import Enum

class RequestCancelActivityTaskFailedCauseEnum(str, Enum):
    ACTIVITY_ID_UNKNOWN = "ACTIVITY_ID_UNKNOWN"
    OPERATION_NOT_PERMITTED = "OPERATION_NOT_PERMITTED"

