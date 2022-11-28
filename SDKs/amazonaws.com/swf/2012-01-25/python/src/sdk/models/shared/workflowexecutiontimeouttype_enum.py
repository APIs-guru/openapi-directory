from dataclasses import dataclass, field
from enum import Enum

class WorkflowExecutionTimeoutTypeEnum(str, Enum):
    START_TO_CLOSE = "START_TO_CLOSE"

