from dataclasses import dataclass, field
from typing import Enum

class AcceptCodeValidationEnum(str, Enum):
    IGNORE = "IGNORE"
    ENFORCE = "ENFORCE"

