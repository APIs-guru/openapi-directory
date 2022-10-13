from dataclasses import dataclass, field
from typing import Enum,List

class ListCompilationJobsSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"
    STATUS = "Status"

