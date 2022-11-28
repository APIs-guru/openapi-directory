from dataclasses import dataclass, field
from enum import Enum

class AccessDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

