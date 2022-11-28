from dataclasses import dataclass, field
from enum import Enum

class FileSystemAccessModeEnum(str, Enum):
    RW = "rw"
    RO = "ro"

