from dataclasses import dataclass, field
from typing import Enum

class SecretScanningAlertStateEnum(str, Enum):
    OPEN = "open"
    RESOLVED = "resolved"

