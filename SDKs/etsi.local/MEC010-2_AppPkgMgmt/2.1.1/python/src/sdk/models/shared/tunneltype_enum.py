from dataclasses import dataclass, field
from enum import Enum

class TunnelTypeEnum(str, Enum):
    GTP_U = "GTP-U"
    GRE = "GRE"

