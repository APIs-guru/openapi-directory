from dataclasses import dataclass, field
from typing import Enum

class CompleteWorkflowExecutionFailedCauseEnum(str, Enum):
    UNHANDLED_DECISION = "UNHANDLED_DECISION"
    OPERATION_NOT_PERMITTED = "OPERATION_NOT_PERMITTED"

