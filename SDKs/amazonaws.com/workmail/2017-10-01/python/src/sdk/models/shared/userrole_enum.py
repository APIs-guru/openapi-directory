from dataclasses import dataclass, field
from enum import Enum

class UserRoleEnum(str, Enum):
    USER = "USER"
    RESOURCE = "RESOURCE"
    SYSTEM_USER = "SYSTEM_USER"

