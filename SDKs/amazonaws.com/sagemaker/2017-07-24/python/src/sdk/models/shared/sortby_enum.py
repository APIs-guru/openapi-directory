from dataclasses import dataclass, field
from typing import Enum

class SortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"
    STATUS = "Status"

