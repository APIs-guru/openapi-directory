from dataclasses import dataclass, field
from typing import Enum

class SubResourceTypeEnum(str, Enum):
    IP = "IP"
    URL = "URL"

