from dataclasses import dataclass, field
from typing import Enum

class FeatureGroupStatusEnum(str, Enum):
    CREATING = "Creating"
    CREATED = "Created"
    CREATE_FAILED = "CreateFailed"
    DELETING = "Deleting"
    DELETE_FAILED = "DeleteFailed"

