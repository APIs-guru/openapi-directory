from dataclasses import dataclass, field
from typing import Enum

class AttachmentStatusEnum(str, Enum):
    ATTACHING = "ATTACHING"
    ATTACHED = "ATTACHED"
    DETACHING = "DETACHING"
    DETACHED = "DETACHED"

