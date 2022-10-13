from dataclasses import dataclass, field
from typing import Enum

class DataFormatEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"

