from dataclasses import dataclass, field
from typing import Enum

class AssociationExecutionFilterKeyEnum(str, Enum):
    EXECUTION_ID = "ExecutionId"
    STATUS = "Status"
    CREATED_TIME = "CreatedTime"

