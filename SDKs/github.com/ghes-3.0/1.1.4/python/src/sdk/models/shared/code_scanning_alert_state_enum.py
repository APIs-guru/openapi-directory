from dataclasses import dataclass, field
from typing import Enum

class CodeScanningAlertStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    DISMISSED = "dismissed"
    FIXED = "fixed"

