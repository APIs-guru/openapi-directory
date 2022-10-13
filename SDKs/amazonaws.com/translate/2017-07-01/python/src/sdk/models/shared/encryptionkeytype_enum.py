from dataclasses import dataclass, field
from typing import Enum

class EncryptionKeyTypeEnum(str, Enum):
    KMS = "KMS"

