from dataclasses import dataclass, field
from typing import Enum

class StreamingClipboardModeEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

