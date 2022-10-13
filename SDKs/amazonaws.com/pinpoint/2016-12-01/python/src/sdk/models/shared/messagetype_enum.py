from dataclasses import dataclass, field
from typing import Enum

class MessageTypeEnum(str, Enum):
    TRANSACTIONAL = "TRANSACTIONAL"
    PROMOTIONAL = "PROMOTIONAL"

