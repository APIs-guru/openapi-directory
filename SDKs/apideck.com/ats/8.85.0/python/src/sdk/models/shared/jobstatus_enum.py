from dataclasses import dataclass, field
from enum import Enum

class JobStatusEnum(str, Enum):
    DRAFT = "draft"
    INTERNAL = "internal"
    PUBLISHED = "published"
    COMPLETED = "completed"
    ON_HOLD = "on-hold"
    PRIVATE = "private"

