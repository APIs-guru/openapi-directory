from dataclasses import dataclass, field
from enum import Enum

class StreamingSessionStateEnum(str, Enum):
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
    READY = "READY"
    DELETED = "DELETED"
    CREATE_FAILED = "CREATE_FAILED"
    DELETE_FAILED = "DELETE_FAILED"

