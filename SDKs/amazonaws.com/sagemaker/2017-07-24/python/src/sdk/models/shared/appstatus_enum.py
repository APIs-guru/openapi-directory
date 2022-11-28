from dataclasses import dataclass, field
from enum import Enum

class AppStatusEnum(str, Enum):
    DELETED = "Deleted"
    DELETING = "Deleting"
    FAILED = "Failed"
    IN_SERVICE = "InService"
    PENDING = "Pending"

