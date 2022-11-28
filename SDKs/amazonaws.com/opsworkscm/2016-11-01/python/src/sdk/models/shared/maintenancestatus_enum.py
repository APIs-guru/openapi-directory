from dataclasses import dataclass, field
from enum import Enum

class MaintenanceStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

