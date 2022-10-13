from dataclasses import dataclass, field
from typing import Enum

class ModeEnum(str, Enum):
    DELIVERY = "DELIVERY"
    FILTER = "FILTER"

