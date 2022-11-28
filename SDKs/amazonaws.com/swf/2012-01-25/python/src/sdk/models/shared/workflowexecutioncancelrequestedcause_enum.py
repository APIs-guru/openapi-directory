from dataclasses import dataclass, field
from enum import Enum

class WorkflowExecutionCancelRequestedCauseEnum(str, Enum):
    CHILD_POLICY_APPLIED = "CHILD_POLICY_APPLIED"

