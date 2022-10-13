from dataclasses import dataclass, field
from typing import Enum

class ModificationStateEnumEnum(str, Enum):
    UPDATE_INITIATED = "UPDATE_INITIATED"
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"

