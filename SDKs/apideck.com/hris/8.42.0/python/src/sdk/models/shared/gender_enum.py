from dataclasses import dataclass, field
from typing import Enum

class GenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    UNISEX = "unisex"
    OTHER = "other"

