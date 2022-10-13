from dataclasses import dataclass, field
from typing import Enum

class SortTrialsByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

