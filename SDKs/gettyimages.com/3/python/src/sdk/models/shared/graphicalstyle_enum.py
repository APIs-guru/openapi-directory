from dataclasses import dataclass, field
from enum import Enum

class GraphicalStyleEnum(str, Enum):
    FINE_ART = "fine_art"
    ILLUSTRATION = "illustration"
    PHOTOGRAPHY = "photography"
    VECTOR = "vector"

