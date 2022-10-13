from dataclasses import dataclass, field
from typing import Enum

class InventoryDeletionStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    COMPLETE = "Complete"

