from dataclasses import dataclass, field
from enum import Enum

class EncryptionTypeEnum(str, Enum):
    NONE = "NONE"
    KMS = "KMS"

