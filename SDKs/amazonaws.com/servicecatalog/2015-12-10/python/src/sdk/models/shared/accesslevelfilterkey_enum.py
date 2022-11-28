from dataclasses import dataclass, field
from enum import Enum

class AccessLevelFilterKeyEnum(str, Enum):
    ACCOUNT = "Account"
    ROLE = "Role"
    USER = "User"

