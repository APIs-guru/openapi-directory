from dataclasses import dataclass, field
from enum import Enum

class CustomPluginStateEnum(str, Enum):
    CREATING = "CREATING"
    CREATE_FAILED = "CREATE_FAILED"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    UPDATE_FAILED = "UPDATE_FAILED"
    DELETING = "DELETING"

