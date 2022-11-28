from dataclasses import dataclass, field
from enum import Enum

class CodeScanningAlertSetStateEnum(str, Enum):
    OPEN = "open"
    DISMISSED = "dismissed"

