from dataclasses import dataclass, field
from typing import Enum

class EncryptionStatusEnum(str, Enum):
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"

