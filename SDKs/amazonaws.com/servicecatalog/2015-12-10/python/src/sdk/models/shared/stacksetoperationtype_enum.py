from dataclasses import dataclass, field
from enum import Enum

class StackSetOperationTypeEnum(str, Enum):
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    DELETE = "DELETE"

