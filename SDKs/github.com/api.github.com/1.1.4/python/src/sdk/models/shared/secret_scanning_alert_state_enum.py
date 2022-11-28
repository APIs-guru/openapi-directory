from dataclasses import dataclass, field
from enum import Enum

class SecretScanningAlertStateEnum(str, Enum):
    OPEN = "open"
    RESOLVED = "resolved"

