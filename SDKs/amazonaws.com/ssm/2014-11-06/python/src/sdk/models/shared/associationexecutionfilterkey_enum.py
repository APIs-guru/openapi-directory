from dataclasses import dataclass, field
from enum import Enum

class AssociationExecutionFilterKeyEnum(str, Enum):
    EXECUTION_ID = "ExecutionId"
    STATUS = "Status"
    CREATED_TIME = "CreatedTime"

