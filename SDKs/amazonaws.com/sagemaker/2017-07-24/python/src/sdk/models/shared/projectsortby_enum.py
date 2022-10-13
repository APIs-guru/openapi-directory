from dataclasses import dataclass, field
from typing import Enum

class ProjectSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

