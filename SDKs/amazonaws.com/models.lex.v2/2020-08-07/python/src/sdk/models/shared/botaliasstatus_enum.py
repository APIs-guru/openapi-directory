from dataclasses import dataclass, field
from typing import Enum

class BotAliasStatusEnum(str, Enum):
    CREATING = "Creating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

