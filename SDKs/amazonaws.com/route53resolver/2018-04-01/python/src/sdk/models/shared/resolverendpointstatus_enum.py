from dataclasses import dataclass, field
from typing import Enum

class ResolverEndpointStatusEnum(str, Enum):
    CREATING = "CREATING"
    OPERATIONAL = "OPERATIONAL"
    UPDATING = "UPDATING"
    AUTO_RECOVERING = "AUTO_RECOVERING"
    ACTION_NEEDED = "ACTION_NEEDED"
    DELETING = "DELETING"

