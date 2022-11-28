from dataclasses import dataclass, field
from enum import Enum

class AssociationStatusNameEnum(str, Enum):
    PENDING = "Pending"
    SUCCESS = "Success"
    FAILED = "Failed"

