from dataclasses import dataclass, field
from typing import Enum

class CarfaxCleanTitleEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

