from dataclasses import dataclass, field
from typing import Enum

class RegistrationStatusEnum(str, Enum):
    REGISTERED = "REGISTERED"
    DEPRECATED = "DEPRECATED"

