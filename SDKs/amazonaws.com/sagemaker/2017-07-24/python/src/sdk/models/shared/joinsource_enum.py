from dataclasses import dataclass, field
from typing import Enum

class JoinSourceEnum(str, Enum):
    INPUT = "Input"
    NONE = "None"

