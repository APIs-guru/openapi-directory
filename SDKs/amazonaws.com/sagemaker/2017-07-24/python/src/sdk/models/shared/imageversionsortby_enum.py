from dataclasses import dataclass, field
from typing import Enum

class ImageVersionSortByEnum(str, Enum):
    CREATION_TIME = "CREATION_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"
    VERSION = "VERSION"

