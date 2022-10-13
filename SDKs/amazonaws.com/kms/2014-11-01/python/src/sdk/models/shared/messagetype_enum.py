from dataclasses import dataclass, field
from typing import Enum

class MessageTypeEnum(str, Enum):
    RAW = "RAW"
    DIGEST = "DIGEST"

