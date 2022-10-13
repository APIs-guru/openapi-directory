from dataclasses import dataclass, field
from typing import Enum

class MaintenanceWindowResourceTypeEnum(str, Enum):
    INSTANCE = "INSTANCE"
    RESOURCE_GROUP = "RESOURCE_GROUP"

