from dataclasses import dataclass, field
from typing import Enum

class WorkflowExecutionTerminatedCauseEnum(str, Enum):
    CHILD_POLICY_APPLIED = "CHILD_POLICY_APPLIED"
    EVENT_LIMIT_EXCEEDED = "EVENT_LIMIT_EXCEEDED"
    OPERATOR_INITIATED = "OPERATOR_INITIATED"

