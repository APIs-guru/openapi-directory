from dataclasses import dataclass, field
from typing import Enum

class AssociationStatusNameEnum(str, Enum):
    PENDING = "Pending"
    SUCCESS = "Success"
    FAILED = "Failed"

