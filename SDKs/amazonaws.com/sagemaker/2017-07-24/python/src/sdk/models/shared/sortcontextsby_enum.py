from dataclasses import dataclass, field
from typing import Enum

class SortContextsByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

