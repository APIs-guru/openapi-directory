from dataclasses import dataclass, field
from typing import Enum

class ResourceBucketAccessEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

