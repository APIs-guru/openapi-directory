from dataclasses import dataclass, field
from enum import Enum

class HomeDirectoryTypeEnum(str, Enum):
    PATH = "PATH"
    LOGICAL = "LOGICAL"

