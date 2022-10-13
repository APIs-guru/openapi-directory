from dataclasses import dataclass, field
from typing import Enum

class AccessTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"

