from dataclasses import dataclass, field
from enum import Enum

class FailWorkflowExecutionFailedCauseEnum(str, Enum):
    UNHANDLED_DECISION = "UNHANDLED_DECISION"
    OPERATION_NOT_PERMITTED = "OPERATION_NOT_PERMITTED"

