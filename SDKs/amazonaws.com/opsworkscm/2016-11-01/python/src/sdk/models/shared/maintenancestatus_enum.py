from dataclasses import dataclass, field
from typing import Enum

class MaintenanceStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

