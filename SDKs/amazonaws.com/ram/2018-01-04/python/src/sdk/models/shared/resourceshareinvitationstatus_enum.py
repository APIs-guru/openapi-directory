from dataclasses import dataclass, field
from enum import Enum

class ResourceShareInvitationStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    EXPIRED = "EXPIRED"

