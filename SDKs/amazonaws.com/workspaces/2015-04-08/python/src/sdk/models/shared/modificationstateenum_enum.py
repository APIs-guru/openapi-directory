from dataclasses import dataclass, field
from enum import Enum

class ModificationStateEnumEnum(str, Enum):
    UPDATE_INITIATED = "UPDATE_INITIATED"
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"

