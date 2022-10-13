from dataclasses import dataclass, field
from typing import Enum

class AthenaResultCompressionTypeEnum(str, Enum):
    GZIP = "GZIP"
    SNAPPY = "SNAPPY"
    ZLIB = "ZLIB"

