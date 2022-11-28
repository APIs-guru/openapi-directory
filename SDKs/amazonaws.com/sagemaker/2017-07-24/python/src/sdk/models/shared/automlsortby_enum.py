from dataclasses import dataclass, field
from enum import Enum

class AutoMlSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"
    STATUS = "Status"

