from dataclasses import dataclass, field
from typing import Enum

class RedshiftResultCompressionTypeEnum(str, Enum):
    NONE = "None"
    GZIP = "GZIP"
    BZIP2 = "BZIP2"
    ZSTD = "ZSTD"
    SNAPPY = "SNAPPY"

