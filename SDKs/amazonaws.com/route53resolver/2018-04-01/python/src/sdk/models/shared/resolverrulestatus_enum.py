from dataclasses import dataclass, field
from typing import Enum

class ResolverRuleStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    FAILED = "FAILED"

