from dataclasses import dataclass, field
from typing import Enum

class VirtualizationTypeEnum(str, Enum):
    PARAVIRTUAL = "paravirtual"
    HVM = "hvm"

