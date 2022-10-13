from dataclasses import dataclass, field
from typing import Enum

class LangEnum(str, Enum):
    EN = "en"
    CY = "cy"
    GA = "ga"
    GD = "gd"
    PI = "pi"

