from dataclasses import dataclass, field
from typing import Enum

class AccessControlRuleEffectEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

