from dataclasses import dataclass, field
from typing import Enum

class OperatorEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"

