from dataclasses import dataclass, field
from typing import Enum

class FirewallRuleGroupStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

