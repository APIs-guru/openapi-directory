from dataclasses import dataclass, field
from enum import Enum

class GeneratedRulesTypeEnum(str, Enum):
    ALLOWLIST = "ALLOWLIST"
    DENYLIST = "DENYLIST"

