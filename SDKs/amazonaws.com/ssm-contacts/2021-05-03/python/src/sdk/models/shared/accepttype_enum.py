from dataclasses import dataclass, field
from typing import Enum

class AcceptTypeEnum(str, Enum):
    DELIVERED = "DELIVERED"
    READ = "READ"

