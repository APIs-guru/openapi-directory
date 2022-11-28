from dataclasses import dataclass, field
from enum import Enum

class TypeEnum(str, Enum):
    NONE = "NONE"
    AES256 = "AES256"
    AWS_KMS = "aws:kms"

