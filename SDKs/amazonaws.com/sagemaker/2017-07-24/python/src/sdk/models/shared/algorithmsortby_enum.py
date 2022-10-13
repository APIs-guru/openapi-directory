from dataclasses import dataclass, field
from typing import Enum

class AlgorithmSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

