from dataclasses import dataclass, field
from enum import Enum

class FaultEnum(str, Enum):
    CLIENT = "Client"
    SERVER = "Server"
    UNKNOWN = "Unknown"

