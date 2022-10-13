from dataclasses import dataclass, field
from typing import Enum

class ProjectStatusEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"

