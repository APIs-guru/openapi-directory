from dataclasses import dataclass, field
from enum import Enum

class ModelPackageSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

