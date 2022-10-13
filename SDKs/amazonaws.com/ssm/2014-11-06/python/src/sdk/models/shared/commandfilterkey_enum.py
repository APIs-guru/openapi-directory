from dataclasses import dataclass, field
from typing import Enum

class CommandFilterKeyEnum(str, Enum):
    INVOKED_AFTER = "InvokedAfter"
    INVOKED_BEFORE = "InvokedBefore"
    STATUS = "Status"
    EXECUTION_STAGE = "ExecutionStage"
    DOCUMENT_NAME = "DocumentName"

