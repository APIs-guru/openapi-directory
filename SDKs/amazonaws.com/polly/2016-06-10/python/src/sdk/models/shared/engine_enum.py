from dataclasses import dataclass, field
from typing import Enum

class EngineEnum(str, Enum):
    STANDARD = "standard"
    NEURAL = "neural"

