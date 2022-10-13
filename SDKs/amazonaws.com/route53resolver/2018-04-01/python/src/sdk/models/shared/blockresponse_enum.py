from dataclasses import dataclass, field
from typing import Enum

class BlockResponseEnum(str, Enum):
    NODATA = "NODATA"
    NXDOMAIN = "NXDOMAIN"
    OVERRIDE = "OVERRIDE"

