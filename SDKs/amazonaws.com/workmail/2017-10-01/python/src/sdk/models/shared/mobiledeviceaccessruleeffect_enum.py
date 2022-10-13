from dataclasses import dataclass, field
from typing import Enum

class MobileDeviceAccessRuleEffectEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

