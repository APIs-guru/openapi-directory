from dataclasses import dataclass, field
from typing import Enum

class CodeScanningAlertSetStateEnum(str, Enum):
    OPEN = "open"
    DISMISSED = "dismissed"

