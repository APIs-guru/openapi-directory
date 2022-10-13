from dataclasses import dataclass, field
from typing import Enum

class ServiceUpdateTypeEnum(str, Enum):
    SECURITY_UPDATE = "security-update"

