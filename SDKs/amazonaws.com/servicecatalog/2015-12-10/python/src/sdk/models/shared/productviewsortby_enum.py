from dataclasses import dataclass, field
from typing import Enum

class ProductViewSortByEnum(str, Enum):
    TITLE = "Title"
    VERSION_COUNT = "VersionCount"
    CREATION_DATE = "CreationDate"

