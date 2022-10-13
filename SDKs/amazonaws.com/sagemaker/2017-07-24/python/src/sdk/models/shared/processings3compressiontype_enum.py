from dataclasses import dataclass, field
from typing import Enum

class ProcessingS3CompressionTypeEnum(str, Enum):
    NONE = "None"
    GZIP = "Gzip"

