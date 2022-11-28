from dataclasses import dataclass, field
from enum import Enum

class OperationFilterNameEnum(str, Enum):
    NAMESPACE_ID = "NAMESPACE_ID"
    SERVICE_ID = "SERVICE_ID"
    STATUS = "STATUS"
    TYPE = "TYPE"
    UPDATE_DATE = "UPDATE_DATE"

