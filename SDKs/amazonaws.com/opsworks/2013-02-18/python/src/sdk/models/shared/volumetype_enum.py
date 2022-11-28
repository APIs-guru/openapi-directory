from dataclasses import dataclass, field
from enum import Enum

class VolumeTypeEnum(str, Enum):
    GP2 = "gp2"
    IO1 = "io1"
    STANDARD = "standard"

