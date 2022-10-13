from dataclasses import dataclass, field
from typing import Enum

class SlotFilterOperatorEnum(str, Enum):
    CO = "CO"
    EQ = "EQ"

