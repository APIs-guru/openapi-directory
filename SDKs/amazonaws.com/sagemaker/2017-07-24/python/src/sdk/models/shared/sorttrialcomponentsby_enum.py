from dataclasses import dataclass, field
from typing import Enum

class SortTrialComponentsByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

