from dataclasses import dataclass, field
from enum import Enum

class AcceptCodeValidationEnum(str, Enum):
    IGNORE = "IGNORE"
    ENFORCE = "ENFORCE"

