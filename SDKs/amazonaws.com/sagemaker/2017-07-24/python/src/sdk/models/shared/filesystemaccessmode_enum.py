from dataclasses import dataclass, field
from typing import Enum

class FileSystemAccessModeEnum(str, Enum):
    RW = "rw"
    RO = "ro"

