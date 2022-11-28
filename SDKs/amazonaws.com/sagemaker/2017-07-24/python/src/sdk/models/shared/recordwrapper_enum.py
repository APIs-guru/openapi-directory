from dataclasses import dataclass, field
from enum import Enum

class RecordWrapperEnum(str, Enum):
    NONE = "None"
    RECORD_IO = "RecordIO"

