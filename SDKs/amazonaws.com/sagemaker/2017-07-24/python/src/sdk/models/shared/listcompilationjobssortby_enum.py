from dataclasses import dataclass, field
from enum import Enum

class ListCompilationJobsSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"
    STATUS = "Status"

