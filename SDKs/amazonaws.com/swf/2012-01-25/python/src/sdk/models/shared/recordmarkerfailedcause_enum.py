from dataclasses import dataclass, field
from enum import Enum

class RecordMarkerFailedCauseEnum(str, Enum):
    OPERATION_NOT_PERMITTED = "OPERATION_NOT_PERMITTED"

