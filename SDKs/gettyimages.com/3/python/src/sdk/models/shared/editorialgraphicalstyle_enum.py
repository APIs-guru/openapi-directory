from dataclasses import dataclass, field
from typing import Enum

class EditorialGraphicalStyleEnum(str, Enum):
    PHOTOGRAPHY = "photography"
    ILLUSTRATION = "illustration"
    VECTOR = "vector"

