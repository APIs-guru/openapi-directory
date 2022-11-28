from dataclasses import dataclass, field
from enum import Enum

class NetworkDirectionEnum(str, Enum):
    IN = "IN"
    OUT = "OUT"

