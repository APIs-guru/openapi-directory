from dataclasses import dataclass, field
from typing import Enum

class KeyUsageTypeEnum(str, Enum):
    SIGN_VERIFY = "SIGN_VERIFY"
    ENCRYPT_DECRYPT = "ENCRYPT_DECRYPT"

