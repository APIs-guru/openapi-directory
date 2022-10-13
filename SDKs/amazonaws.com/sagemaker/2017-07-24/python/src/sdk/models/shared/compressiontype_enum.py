from dataclasses import dataclass, field
from typing import Enum

class CompressionTypeEnum(str, Enum):
    NONE = "None"
    GZIP = "Gzip"

