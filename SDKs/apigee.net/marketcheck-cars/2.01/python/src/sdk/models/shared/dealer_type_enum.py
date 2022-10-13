from dataclasses import dataclass, field
from typing import Enum

class DealerTypeEnum(str, Enum):
    FRANCHISE = "franchise"
    INDEPENDENT = "independent"

