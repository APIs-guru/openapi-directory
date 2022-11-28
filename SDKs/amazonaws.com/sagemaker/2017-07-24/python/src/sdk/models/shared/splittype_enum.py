from dataclasses import dataclass, field
from enum import Enum

class SplitTypeEnum(str, Enum):
    NONE = "None"
    LINE = "Line"
    RECORD_IO = "RecordIO"
    TF_RECORD = "TFRecord"

