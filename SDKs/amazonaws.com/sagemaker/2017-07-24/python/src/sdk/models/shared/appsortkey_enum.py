from dataclasses import dataclass, field
from typing import Enum

class AppSortKeyEnum(str, Enum):
    CREATION_TIME = "CreationTime"

