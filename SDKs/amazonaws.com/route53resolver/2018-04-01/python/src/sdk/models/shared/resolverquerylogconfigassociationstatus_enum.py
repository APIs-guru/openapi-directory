from dataclasses import dataclass, field
from enum import Enum

class ResolverQueryLogConfigAssociationStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    ACTION_NEEDED = "ACTION_NEEDED"
    DELETING = "DELETING"
    FAILED = "FAILED"

