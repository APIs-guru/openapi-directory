from dataclasses import dataclass, field
from typing import Enum

class GenderEnum(str, Enum):
    FEMALE = "Female"
    MALE = "Male"

