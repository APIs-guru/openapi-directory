from dataclasses import dataclass, field
from enum import Enum

class StreamingClipboardModeEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

