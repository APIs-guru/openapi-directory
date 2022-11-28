from dataclasses import dataclass, field
from enum import Enum

class TargetIDTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    OU = "OU"
    ROOT = "ROOT"

