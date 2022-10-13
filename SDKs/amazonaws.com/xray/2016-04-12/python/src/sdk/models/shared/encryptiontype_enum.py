from dataclasses import dataclass, field
from typing import Enum

class EncryptionTypeEnum(str, Enum):
    NONE = "NONE"
    KMS = "KMS"

