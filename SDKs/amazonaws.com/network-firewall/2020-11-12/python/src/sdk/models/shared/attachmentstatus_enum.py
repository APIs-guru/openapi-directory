from dataclasses import dataclass, field
from typing import Enum

class AttachmentStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    SCALING = "SCALING"
    READY = "READY"

