from dataclasses import dataclass, field
from enum import Enum

class UserProfileSortKeyEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    LAST_MODIFIED_TIME = "LastModifiedTime"

