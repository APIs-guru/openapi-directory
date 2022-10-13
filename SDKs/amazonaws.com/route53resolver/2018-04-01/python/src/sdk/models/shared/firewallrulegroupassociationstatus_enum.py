from dataclasses import dataclass, field
from typing import Enum

class FirewallRuleGroupAssociationStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

