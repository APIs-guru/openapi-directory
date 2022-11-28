from dataclasses import dataclass, field
from enum import Enum

class ProcessingS3CompressionTypeEnum(str, Enum):
    NONE = "None"
    GZIP = "Gzip"

