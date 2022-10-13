from dataclasses import dataclass, field
from typing import Enum

class SortExperimentsByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

