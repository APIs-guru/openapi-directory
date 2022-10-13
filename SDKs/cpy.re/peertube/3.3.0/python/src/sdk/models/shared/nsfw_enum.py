from dataclasses import dataclass, field
from typing import Enum

class NsfwEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

