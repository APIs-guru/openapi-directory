from dataclasses import dataclass, field
from typing import Enum

class TrainingModeEnum(str, Enum):
    FULL = "FULL"
    UPDATE = "UPDATE"

