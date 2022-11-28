from dataclasses import dataclass, field
from enum import Enum

class FlowDefinitionStatusEnum(str, Enum):
    INITIALIZING = "Initializing"
    ACTIVE = "Active"
    FAILED = "Failed"
    DELETING = "Deleting"

