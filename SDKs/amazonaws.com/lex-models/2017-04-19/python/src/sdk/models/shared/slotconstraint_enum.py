from dataclasses import dataclass, field
from typing import Enum,Optional

class SlotConstraintEnum(str, Enum):
    REQUIRED = "Required"
    OPTIONAL = "Optional"

