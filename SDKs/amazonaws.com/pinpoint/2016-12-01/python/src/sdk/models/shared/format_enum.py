from dataclasses import dataclass, field
from enum import Enum

class FormatEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"

