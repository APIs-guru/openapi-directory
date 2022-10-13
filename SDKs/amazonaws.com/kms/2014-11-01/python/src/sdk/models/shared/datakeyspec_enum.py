from dataclasses import dataclass, field
from typing import Enum

class DataKeySpecEnum(str, Enum):
    AES_256 = "AES_256"
    AES_128 = "AES_128"

