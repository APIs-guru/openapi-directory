from dataclasses import dataclass, field
from typing import Enum

class AccessLevelFilterKeyEnum(str, Enum):
    ACCOUNT = "Account"
    ROLE = "Role"
    USER = "User"

