from dataclasses import dataclass, field
from typing import Enum

class SnowballTypeEnum(str, Enum):
    STANDARD = "STANDARD"
    EDGE = "EDGE"
    EDGE_C = "EDGE_C"
    EDGE_CG = "EDGE_CG"
    EDGE_S = "EDGE_S"
    SNC1_HDD = "SNC1_HDD"
    SNC1_SSD = "SNC1_SSD"

