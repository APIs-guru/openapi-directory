from dataclasses import dataclass, field
from typing import Enum

class AccessDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

