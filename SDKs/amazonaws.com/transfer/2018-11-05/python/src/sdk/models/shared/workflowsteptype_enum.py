from dataclasses import dataclass, field
from typing import Enum

class WorkflowStepTypeEnum(str, Enum):
    COPY = "COPY"
    CUSTOM = "CUSTOM"
    TAG = "TAG"
    DELETE = "DELETE"

