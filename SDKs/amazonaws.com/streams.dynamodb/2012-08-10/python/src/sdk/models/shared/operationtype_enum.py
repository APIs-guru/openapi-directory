from dataclasses import dataclass, field
from typing import Enum

class OperationTypeEnum(str, Enum):
    INSERT = "INSERT"
    MODIFY = "MODIFY"
    REMOVE = "REMOVE"

