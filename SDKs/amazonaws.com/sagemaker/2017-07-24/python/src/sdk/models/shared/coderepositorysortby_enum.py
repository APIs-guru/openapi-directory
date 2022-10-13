from dataclasses import dataclass, field
from typing import Enum

class CodeRepositorySortByEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"
    LAST_MODIFIED_TIME = "LastModifiedTime"

