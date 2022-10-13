from dataclasses import dataclass, field
from typing import Enum

class GeneratedRulesTypeEnum(str, Enum):
    ALLOWLIST = "ALLOWLIST"
    DENYLIST = "DENYLIST"

