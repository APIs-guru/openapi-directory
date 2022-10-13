from dataclasses import dataclass, field
from typing import Enum

class SlotTypeFilterOperatorEnum(str, Enum):
    CO = "CO"
    EQ = "EQ"

