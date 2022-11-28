from dataclasses import dataclass, field
from enum import Enum

class SubResourceTypeEnum(str, Enum):
    IP = "IP"
    URL = "URL"

