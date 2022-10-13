from dataclasses import dataclass, field
from typing import Enum

class HomeDirectoryTypeEnum(str, Enum):
    PATH = "PATH"
    LOGICAL = "LOGICAL"

