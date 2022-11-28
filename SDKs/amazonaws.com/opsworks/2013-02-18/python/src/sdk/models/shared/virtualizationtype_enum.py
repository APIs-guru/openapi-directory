from dataclasses import dataclass, field
from enum import Enum

class VirtualizationTypeEnum(str, Enum):
    PARAVIRTUAL = "paravirtual"
    HVM = "hvm"

