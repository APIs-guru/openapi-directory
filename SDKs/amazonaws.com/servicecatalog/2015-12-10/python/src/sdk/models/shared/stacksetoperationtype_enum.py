from dataclasses import dataclass, field
from typing import Enum

class StackSetOperationTypeEnum(str, Enum):
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    DELETE = "DELETE"

