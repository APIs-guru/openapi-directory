from dataclasses import dataclass, field
from typing import Enum,List

class ListOrderByEnum(str, Enum):
    A_Z = "a-z"
    RELEASE_YEAR = "release-year"
    DATE_ADDED = "date-added"

