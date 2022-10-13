from dataclasses import dataclass, field
from typing import Enum

class FaultEnum(str, Enum):
    CLIENT = "Client"
    SERVER = "Server"
    UNKNOWN = "Unknown"

