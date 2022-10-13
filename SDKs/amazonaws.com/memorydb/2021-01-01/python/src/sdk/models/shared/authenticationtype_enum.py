from dataclasses import dataclass, field
from typing import Enum

class AuthenticationTypeEnum(str, Enum):
    PASSWORD = "password"
    NO_PASSWORD = "no-password"

