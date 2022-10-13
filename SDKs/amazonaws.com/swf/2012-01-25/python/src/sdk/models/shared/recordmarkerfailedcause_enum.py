from dataclasses import dataclass, field
from typing import Enum

class RecordMarkerFailedCauseEnum(str, Enum):
    OPERATION_NOT_PERMITTED = "OPERATION_NOT_PERMITTED"

