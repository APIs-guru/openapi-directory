from dataclasses import dataclass, field
from enum import Enum

class JSONFileCompressionEnum(str, Enum):
    NONE = "NONE"
    GZIP = "GZIP"

