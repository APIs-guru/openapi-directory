from dataclasses import dataclass, field
from enum import Enum

class KnownGenderTypeEnum(str, Enum):
    MALE = "Male"
    FEMALE = "Female"

