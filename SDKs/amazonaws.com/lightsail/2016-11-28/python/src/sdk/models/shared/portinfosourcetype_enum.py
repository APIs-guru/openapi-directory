from dataclasses import dataclass, field
from typing import Enum

class PortInfoSourceTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    INSTANCE = "INSTANCE"
    NONE = "NONE"
    CLOSED = "CLOSED"

