from dataclasses import dataclass, field
from typing import Enum

class CodeSigningPolicyEnum(str, Enum):
    WARN = "Warn"
    ENFORCE = "Enforce"

