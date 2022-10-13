from dataclasses import dataclass, field
from typing import Enum

class StreamingSessionStreamStateEnum(str, Enum):
    READY = "READY"
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
    DELETED = "DELETED"
    CREATE_FAILED = "CREATE_FAILED"
    DELETE_FAILED = "DELETE_FAILED"

