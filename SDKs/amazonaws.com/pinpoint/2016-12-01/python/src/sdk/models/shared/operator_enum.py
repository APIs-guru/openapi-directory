from dataclasses import dataclass, field
from enum import Enum

class OperatorEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"

