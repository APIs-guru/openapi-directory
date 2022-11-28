from dataclasses import dataclass, field
from enum import Enum

class SortContextsByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

