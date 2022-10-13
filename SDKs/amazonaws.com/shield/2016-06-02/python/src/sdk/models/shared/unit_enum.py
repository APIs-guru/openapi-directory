from dataclasses import dataclass, field
from typing import Enum

class UnitEnum(str, Enum):
    BITS = "BITS"
    BYTES = "BYTES"
    PACKETS = "PACKETS"
    REQUESTS = "REQUESTS"

