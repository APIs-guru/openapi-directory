from dataclasses import dataclass, field
from typing import Enum

class ImageVersionStatusEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    CREATE_FAILED = "CREATE_FAILED"
    DELETING = "DELETING"
    DELETE_FAILED = "DELETE_FAILED"

