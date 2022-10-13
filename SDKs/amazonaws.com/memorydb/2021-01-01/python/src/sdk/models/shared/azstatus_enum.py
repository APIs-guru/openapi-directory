from dataclasses import dataclass, field
from typing import Enum

class AzStatusEnum(str, Enum):
    SINGLEAZ = "singleaz"
    MULTIAZ = "multiaz"

