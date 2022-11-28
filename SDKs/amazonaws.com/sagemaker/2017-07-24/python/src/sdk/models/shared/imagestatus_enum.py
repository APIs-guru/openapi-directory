from dataclasses import dataclass, field
from enum import Enum

class ImageStatusEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    CREATE_FAILED = "CREATE_FAILED"
    UPDATING = "UPDATING"
    UPDATE_FAILED = "UPDATE_FAILED"
    DELETING = "DELETING"
    DELETE_FAILED = "DELETE_FAILED"

