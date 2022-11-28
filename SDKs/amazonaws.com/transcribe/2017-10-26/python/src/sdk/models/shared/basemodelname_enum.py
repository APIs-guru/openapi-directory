from dataclasses import dataclass, field
from enum import Enum

class BaseModelNameEnum(str, Enum):
    NARROW_BAND = "NarrowBand"
    WIDE_BAND = "WideBand"

