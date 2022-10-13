from dataclasses import dataclass, field
from typing import Enum

class CsvFileCompressionEnum(str, Enum):
    NONE = "NONE"
    GZIP = "GZIP"

