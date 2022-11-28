from dataclasses import dataclass, field
from enum import Enum

class StudioLifecycleConfigSortKeyEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    LAST_MODIFIED_TIME = "LastModifiedTime"
    NAME = "Name"

