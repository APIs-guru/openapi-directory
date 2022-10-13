from dataclasses import dataclass, field
from typing import Enum

class RecordFormatTypeEnum(str, Enum):
    JSON = "JSON"
    CSV = "CSV"

