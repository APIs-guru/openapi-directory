from dataclasses import dataclass, field
from enum import Enum

class DealerTypeEnum(str, Enum):
    FRANCHISE = "franchise"
    INDEPENDENT = "independent"

