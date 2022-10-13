from dataclasses import dataclass, field
from typing import Enum

class SortPipelinesByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

