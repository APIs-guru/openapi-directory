from dataclasses import dataclass, field
from typing import Enum

class ImportFilterOperatorEnum(str, Enum):
    CO = "CO"
    EQ = "EQ"

