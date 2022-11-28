from dataclasses import dataclass, field
from enum import Enum

class EndpointStatusEnum(str, Enum):
    OUT_OF_SERVICE = "OutOfService"
    CREATING = "Creating"
    UPDATING = "Updating"
    SYSTEM_UPDATING = "SystemUpdating"
    ROLLING_BACK = "RollingBack"
    IN_SERVICE = "InService"
    DELETING = "Deleting"
    FAILED = "Failed"

