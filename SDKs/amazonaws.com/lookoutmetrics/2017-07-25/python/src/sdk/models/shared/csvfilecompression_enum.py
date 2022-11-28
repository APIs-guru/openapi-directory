from dataclasses import dataclass, field
from enum import Enum

class CsvFileCompressionEnum(str, Enum):
    NONE = "NONE"
    GZIP = "GZIP"

