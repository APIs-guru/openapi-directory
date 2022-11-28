from dataclasses import dataclass, field
from enum import Enum

class TagTargetEnum(str, Enum):
    S3_OBJECT = "S3_OBJECT"

