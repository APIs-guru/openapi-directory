from dataclasses import dataclass, field
from enum import Enum

class SortPipelinesByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

