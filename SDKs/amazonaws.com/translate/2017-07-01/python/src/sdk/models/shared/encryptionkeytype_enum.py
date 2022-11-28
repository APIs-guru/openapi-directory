from dataclasses import dataclass, field
from enum import Enum

class EncryptionKeyTypeEnum(str, Enum):
    KMS = "KMS"

