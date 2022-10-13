from dataclasses import dataclass, field
from typing import Enum

class KnownGenderTypeEnum(str, Enum):
    MALE = "Male"
    FEMALE = "Female"

