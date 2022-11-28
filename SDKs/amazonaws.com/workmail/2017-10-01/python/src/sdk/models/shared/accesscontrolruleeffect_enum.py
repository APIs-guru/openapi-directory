from dataclasses import dataclass, field
from enum import Enum

class AccessControlRuleEffectEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

