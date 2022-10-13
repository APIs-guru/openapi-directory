from dataclasses import dataclass, field
from typing import Enum

class DeliverabilityTestStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"

