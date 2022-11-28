from dataclasses import dataclass, field
from enum import Enum

class GenderEnum(str, Enum):
    FEMALE = "Female"
    MALE = "Male"

