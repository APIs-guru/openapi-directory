from dataclasses import dataclass, field
from enum import Enum

class RecordFormatTypeEnum(str, Enum):
    JSON = "JSON"
    CSV = "CSV"

