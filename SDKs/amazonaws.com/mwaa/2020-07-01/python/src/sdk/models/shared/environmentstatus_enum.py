from dataclasses import dataclass, field
from enum import Enum

class EnvironmentStatusEnum(str, Enum):
    CREATING = "CREATING"
    CREATE_FAILED = "CREATE_FAILED"
    AVAILABLE = "AVAILABLE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETED = "DELETED"
    UNAVAILABLE = "UNAVAILABLE"
    UPDATE_FAILED = "UPDATE_FAILED"

