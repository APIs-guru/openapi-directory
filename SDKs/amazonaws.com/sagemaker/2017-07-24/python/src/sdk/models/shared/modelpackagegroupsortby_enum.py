from dataclasses import dataclass, field
from enum import Enum

class ModelPackageGroupSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

