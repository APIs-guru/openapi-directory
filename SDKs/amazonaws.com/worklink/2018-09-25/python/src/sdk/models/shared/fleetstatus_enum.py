from dataclasses import dataclass, field
from enum import Enum

class FleetStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    DELETED = "DELETED"
    FAILED_TO_CREATE = "FAILED_TO_CREATE"
    FAILED_TO_DELETE = "FAILED_TO_DELETE"

