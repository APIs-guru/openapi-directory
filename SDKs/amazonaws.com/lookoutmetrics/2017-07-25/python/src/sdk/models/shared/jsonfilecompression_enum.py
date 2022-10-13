from dataclasses import dataclass, field
from typing import Enum

class JSONFileCompressionEnum(str, Enum):
    NONE = "NONE"
    GZIP = "GZIP"

