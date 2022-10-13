from dataclasses import dataclass, field
from typing import Enum

class ResourceGroupStateEnum(str, Enum):
    CREATING = "CREATING"
    CREATE_COMPLETE = "CREATE_COMPLETE"
    CREATE_FAILED = "CREATE_FAILED"
    UPDATING = "UPDATING"
    UPDATE_COMPLETE = "UPDATE_COMPLETE"
    UPDATE_FAILED = "UPDATE_FAILED"

