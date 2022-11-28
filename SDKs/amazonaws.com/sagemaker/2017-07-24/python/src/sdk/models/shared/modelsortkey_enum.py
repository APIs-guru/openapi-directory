from dataclasses import dataclass, field
from enum import Enum

class ModelSortKeyEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

