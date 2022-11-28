from dataclasses import dataclass, field
from enum import Enum

class ResolverRuleStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    FAILED = "FAILED"

