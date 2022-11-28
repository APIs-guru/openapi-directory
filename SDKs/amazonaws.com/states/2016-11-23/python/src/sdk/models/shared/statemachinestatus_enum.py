from dataclasses import dataclass, field
from enum import Enum

class StateMachineStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

