from dataclasses import dataclass, field
from typing import Enum

class ParameterTierEnum(str, Enum):
    STANDARD = "Standard"
    ADVANCED = "Advanced"
    INTELLIGENT_TIERING = "Intelligent-Tiering"

