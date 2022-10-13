from dataclasses import dataclass, field
from typing import Enum

class GenderTypeEnum(str, Enum):
    MALE = "Male"
    FEMALE = "Female"

