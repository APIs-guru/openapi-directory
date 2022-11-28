from dataclasses import dataclass, field
from enum import Enum

class InferenceExecutionModeEnum(str, Enum):
    SERIAL = "Serial"
    DIRECT = "Direct"

