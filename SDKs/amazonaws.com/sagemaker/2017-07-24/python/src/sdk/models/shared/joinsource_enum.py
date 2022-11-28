from dataclasses import dataclass, field
from enum import Enum

class JoinSourceEnum(str, Enum):
    INPUT = "Input"
    NONE = "None"

