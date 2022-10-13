from dataclasses import dataclass, field
from typing import Enum

class TagTargetEnum(str, Enum):
    S3_OBJECT = "S3_OBJECT"

