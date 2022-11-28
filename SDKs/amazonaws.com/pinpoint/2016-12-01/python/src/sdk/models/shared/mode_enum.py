from dataclasses import dataclass, field
from enum import Enum

class ModeEnum(str, Enum):
    DELIVERY = "DELIVERY"
    FILTER = "FILTER"

