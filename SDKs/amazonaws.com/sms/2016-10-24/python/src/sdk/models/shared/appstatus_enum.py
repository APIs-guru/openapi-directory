from dataclasses import dataclass, field
from enum import Enum

class AppStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETED = "DELETED"
    DELETE_FAILED = "DELETE_FAILED"

