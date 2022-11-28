from dataclasses import dataclass, field
from enum import Enum

class InventoryDeletionStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    COMPLETE = "Complete"

