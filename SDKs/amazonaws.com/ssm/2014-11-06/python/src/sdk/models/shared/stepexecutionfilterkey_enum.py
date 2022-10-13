from dataclasses import dataclass, field
from typing import Enum

class StepExecutionFilterKeyEnum(str, Enum):
    START_TIME_BEFORE = "StartTimeBefore"
    START_TIME_AFTER = "StartTimeAfter"
    STEP_EXECUTION_STATUS = "StepExecutionStatus"
    STEP_EXECUTION_ID = "StepExecutionId"
    STEP_NAME = "StepName"
    ACTION = "Action"

