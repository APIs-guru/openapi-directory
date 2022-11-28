from dataclasses import dataclass, field
from enum import Enum

class StateValueEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA"

