from dataclasses import dataclass, field
from typing import Enum

class NodeAssociationStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"

