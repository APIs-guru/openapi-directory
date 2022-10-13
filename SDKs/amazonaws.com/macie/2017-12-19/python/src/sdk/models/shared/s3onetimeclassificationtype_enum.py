from dataclasses import dataclass, field
from typing import Enum

class S3OneTimeClassificationTypeEnum(str, Enum):
    FULL = "FULL"
    NONE = "NONE"

