from dataclasses import dataclass, field
from typing import Enum

class FormatEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"

