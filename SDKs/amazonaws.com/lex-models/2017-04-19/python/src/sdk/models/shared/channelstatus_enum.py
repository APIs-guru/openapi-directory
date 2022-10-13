from dataclasses import dataclass, field
from typing import Enum

class ChannelStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    CREATED = "CREATED"
    FAILED = "FAILED"

