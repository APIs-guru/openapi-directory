from dataclasses import dataclass, field
from typing import Enum

class NotebookInstanceLifecycleConfigSortKeyEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"
    LAST_MODIFIED_TIME = "LastModifiedTime"

