from dataclasses import dataclass, field
from typing import Enum

class RuleGroupTypeEnum(str, Enum):
    STATELESS = "STATELESS"
    STATEFUL = "STATEFUL"

