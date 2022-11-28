from dataclasses import dataclass, field
from enum import Enum

class StopTypeEnum(str, Enum):
    COMPLETE = "Complete"
    CANCEL = "Cancel"

