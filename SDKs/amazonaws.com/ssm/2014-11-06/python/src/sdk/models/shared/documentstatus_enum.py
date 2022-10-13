from dataclasses import dataclass, field
from typing import Enum

class DocumentStatusEnum(str, Enum):
    CREATING = "Creating"
    ACTIVE = "Active"
    UPDATING = "Updating"
    DELETING = "Deleting"
    FAILED = "Failed"

