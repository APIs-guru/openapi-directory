from dataclasses import dataclass, field
from typing import Enum

class SplitTypeEnum(str, Enum):
    NONE = "None"
    LINE = "Line"
    RECORD_IO = "RecordIO"
    TF_RECORD = "TFRecord"

