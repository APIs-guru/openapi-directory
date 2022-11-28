from dataclasses import dataclass, field
from enum import Enum

class AccessTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"

