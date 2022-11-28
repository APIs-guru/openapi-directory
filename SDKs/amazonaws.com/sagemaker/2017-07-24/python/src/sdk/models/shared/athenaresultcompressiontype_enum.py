from dataclasses import dataclass, field
from enum import Enum

class AthenaResultCompressionTypeEnum(str, Enum):
    GZIP = "GZIP"
    SNAPPY = "SNAPPY"
    ZLIB = "ZLIB"

