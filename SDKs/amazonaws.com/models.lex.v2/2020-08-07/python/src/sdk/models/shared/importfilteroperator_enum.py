from dataclasses import dataclass, field
from enum import Enum

class ImportFilterOperatorEnum(str, Enum):
    CO = "CO"
    EQ = "EQ"

