from dataclasses import dataclass, field
from typing import Enum

class SortArtifactsByEnum(str, Enum):
    CREATION_TIME = "CreationTime"

