from dataclasses import dataclass, field
from enum import Enum

class EncryptionTypeEnum(str, Enum):
    SITEWISE_DEFAULT_ENCRYPTION = "SITEWISE_DEFAULT_ENCRYPTION"
    KMS_BASED_ENCRYPTION = "KMS_BASED_ENCRYPTION"

