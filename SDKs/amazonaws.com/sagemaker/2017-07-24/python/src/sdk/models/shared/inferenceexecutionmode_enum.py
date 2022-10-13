from dataclasses import dataclass, field
from typing import Enum

class InferenceExecutionModeEnum(str, Enum):
    SERIAL = "Serial"
    DIRECT = "Direct"

