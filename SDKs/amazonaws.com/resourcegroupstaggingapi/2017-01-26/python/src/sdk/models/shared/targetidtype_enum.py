from dataclasses import dataclass, field
from typing import Enum

class TargetIDTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    OU = "OU"
    ROOT = "ROOT"

