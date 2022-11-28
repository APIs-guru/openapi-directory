from dataclasses import dataclass, field
from enum import Enum

class DataFormatEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"

