from dataclasses import dataclass, field
from enum import Enum

class NsfwEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

