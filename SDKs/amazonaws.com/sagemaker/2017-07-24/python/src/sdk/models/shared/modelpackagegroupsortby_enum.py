from dataclasses import dataclass, field
from typing import Enum

class ModelPackageGroupSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

