from dataclasses import dataclass, field
from typing import Enum

class RuntimeEnum(str, Enum):
    NODEJS = "nodejs"

