from dataclasses import dataclass, field
from typing import Enum

class NetworkDirectionEnum(str, Enum):
    IN = "IN"
    OUT = "OUT"

