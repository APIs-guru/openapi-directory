from dataclasses import dataclass, field
from typing import Enum

class UserRoleEnum(str, Enum):
    USER = "USER"
    RESOURCE = "RESOURCE"
    SYSTEM_USER = "SYSTEM_USER"

