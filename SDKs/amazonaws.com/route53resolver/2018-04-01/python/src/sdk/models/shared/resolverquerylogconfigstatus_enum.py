from dataclasses import dataclass, field
from typing import Enum

class ResolverQueryLogConfigStatusEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"
    FAILED = "FAILED"

