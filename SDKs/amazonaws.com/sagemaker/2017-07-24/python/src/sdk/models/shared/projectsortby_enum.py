from dataclasses import dataclass, field
from enum import Enum

class ProjectSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

