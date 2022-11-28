from dataclasses import dataclass, field
from enum import Enum

class RuleGroupTypeEnum(str, Enum):
    STATELESS = "STATELESS"
    STATEFUL = "STATEFUL"

