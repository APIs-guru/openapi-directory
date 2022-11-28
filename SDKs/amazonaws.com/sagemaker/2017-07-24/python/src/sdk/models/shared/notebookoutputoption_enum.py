from dataclasses import dataclass, field
from enum import Enum

class NotebookOutputOptionEnum(str, Enum):
    ALLOWED = "Allowed"
    DISABLED = "Disabled"

