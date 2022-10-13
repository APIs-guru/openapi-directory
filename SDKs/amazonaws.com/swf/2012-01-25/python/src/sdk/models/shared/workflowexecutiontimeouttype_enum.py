from dataclasses import dataclass, field
from typing import Enum

class WorkflowExecutionTimeoutTypeEnum(str, Enum):
    START_TO_CLOSE = "START_TO_CLOSE"

