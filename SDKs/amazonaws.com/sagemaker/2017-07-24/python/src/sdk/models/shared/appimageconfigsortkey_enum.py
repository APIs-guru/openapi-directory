from dataclasses import dataclass, field
from typing import Enum

class AppImageConfigSortKeyEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    LAST_MODIFIED_TIME = "LastModifiedTime"
    NAME = "Name"

