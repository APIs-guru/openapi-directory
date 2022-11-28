from dataclasses import dataclass, field
from enum import Enum

class KeyManagerTypeEnum(str, Enum):
    AWS = "AWS"
    CUSTOMER = "CUSTOMER"

