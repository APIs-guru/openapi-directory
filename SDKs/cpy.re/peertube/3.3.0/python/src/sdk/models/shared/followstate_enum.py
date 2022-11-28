from dataclasses import dataclass, field
from enum import Enum

class FollowStateEnum(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"

