from dataclasses import dataclass, field
from enum import Enum

class ChangeActionEnum(str, Enum):
    INSERT = "INSERT"
    DELETE = "DELETE"

