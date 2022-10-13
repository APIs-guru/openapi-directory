from dataclasses import dataclass, field
from typing import Enum

class ModelPackageSortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

