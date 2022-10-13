from dataclasses import dataclass, field
from typing import Enum

class AppStatusEnum(str, Enum):
    DELETED = "Deleted"
    DELETING = "Deleting"
    FAILED = "Failed"
    IN_SERVICE = "InService"
    PENDING = "Pending"

