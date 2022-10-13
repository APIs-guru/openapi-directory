from dataclasses import dataclass, field
from typing import Enum

class ChangeActionEnum(str, Enum):
    INSERT = "INSERT"
    DELETE = "DELETE"

