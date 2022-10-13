from dataclasses import dataclass, field
from typing import Enum

class FollowStateEnum(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"

