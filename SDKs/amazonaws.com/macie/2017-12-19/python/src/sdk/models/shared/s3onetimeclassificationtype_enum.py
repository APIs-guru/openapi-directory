from dataclasses import dataclass, field
from enum import Enum

class S3OneTimeClassificationTypeEnum(str, Enum):
    FULL = "FULL"
    NONE = "NONE"

