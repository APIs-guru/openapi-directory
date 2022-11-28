from dataclasses import dataclass, field
from enum import Enum

class BlockResponseEnum(str, Enum):
    NODATA = "NODATA"
    NXDOMAIN = "NXDOMAIN"
    OVERRIDE = "OVERRIDE"

