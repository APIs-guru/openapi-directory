from dataclasses import dataclass, field
from enum import Enum

class EngineEnum(str, Enum):
    STANDARD = "standard"
    NEURAL = "neural"

