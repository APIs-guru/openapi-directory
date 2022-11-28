from dataclasses import dataclass, field
from enum import Enum

class SortTrialComponentsByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

