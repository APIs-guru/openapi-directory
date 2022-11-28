from dataclasses import dataclass, field
from enum import Enum

class MaintenanceWindowTaskTypeEnum(str, Enum):
    RUN_COMMAND = "RUN_COMMAND"
    AUTOMATION = "AUTOMATION"
    STEP_FUNCTIONS = "STEP_FUNCTIONS"
    LAMBDA = "LAMBDA"

