from dataclasses import dataclass, field
from typing import Enum

class UserRightsEnum(str, Enum):
    READ_AND_WRITE = "read_and_write"
    READ_ONLY = "read_only"

