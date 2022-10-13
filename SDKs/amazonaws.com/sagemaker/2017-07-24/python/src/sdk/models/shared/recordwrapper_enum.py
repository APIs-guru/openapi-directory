from dataclasses import dataclass, field
from typing import Enum

class RecordWrapperEnum(str, Enum):
    NONE = "None"
    RECORD_IO = "RecordIO"

