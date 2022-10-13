from dataclasses import dataclass, field
from typing import Enum

class NotebookOutputOptionEnum(str, Enum):
    ALLOWED = "Allowed"
    DISABLED = "Disabled"

