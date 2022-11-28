from dataclasses import dataclass, field
from enum import Enum

class OperationTypeEnum(str, Enum):
    INSERT = "INSERT"
    MODIFY = "MODIFY"
    REMOVE = "REMOVE"

