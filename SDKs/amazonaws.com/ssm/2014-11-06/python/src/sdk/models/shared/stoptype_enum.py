from dataclasses import dataclass, field
from typing import Enum

class StopTypeEnum(str, Enum):
    COMPLETE = "Complete"
    CANCEL = "Cancel"

