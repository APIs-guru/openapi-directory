from dataclasses import dataclass, field
from enum import Enum

class IamAuthModeEnum(str, Enum):
    DISABLED = "DISABLED"
    REQUIRED = "REQUIRED"

