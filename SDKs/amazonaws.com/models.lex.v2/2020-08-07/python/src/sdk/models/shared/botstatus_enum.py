from dataclasses import dataclass, field
from typing import Enum

class BotStatusEnum(str, Enum):
    CREATING = "Creating"
    AVAILABLE = "Available"
    INACTIVE = "Inactive"
    DELETING = "Deleting"
    FAILED = "Failed"
    VERSIONING = "Versioning"
    IMPORTING = "Importing"

