from dataclasses import dataclass, field
from typing import Enum

class WorkflowExecutionCancelRequestedCauseEnum(str, Enum):
    CHILD_POLICY_APPLIED = "CHILD_POLICY_APPLIED"

