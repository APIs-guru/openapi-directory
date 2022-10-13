from dataclasses import dataclass, field
from typing import Enum

class KeyManagerTypeEnum(str, Enum):
    AWS = "AWS"
    CUSTOMER = "CUSTOMER"

