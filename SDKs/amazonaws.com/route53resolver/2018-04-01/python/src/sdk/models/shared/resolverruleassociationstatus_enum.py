from dataclasses import dataclass, field
from typing import Enum

class ResolverRuleAssociationStatusEnum(str, Enum):
    CREATING = "CREATING"
    COMPLETE = "COMPLETE"
    DELETING = "DELETING"
    FAILED = "FAILED"
    OVERRIDDEN = "OVERRIDDEN"

