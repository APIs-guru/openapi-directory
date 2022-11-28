from dataclasses import dataclass, field
from enum import Enum

class MessageTypeEnum(str, Enum):
    RAW = "RAW"
    DIGEST = "DIGEST"

