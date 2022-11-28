from dataclasses import dataclass, field
from enum import Enum

class ResourceBucketAccessEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

