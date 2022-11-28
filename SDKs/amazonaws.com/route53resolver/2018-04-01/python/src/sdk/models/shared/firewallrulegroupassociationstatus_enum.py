from dataclasses import dataclass, field
from enum import Enum

class FirewallRuleGroupAssociationStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

