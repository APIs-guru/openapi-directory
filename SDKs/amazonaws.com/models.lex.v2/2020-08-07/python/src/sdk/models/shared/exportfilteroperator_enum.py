from dataclasses import dataclass, field
from enum import Enum

class ExportFilterOperatorEnum(str, Enum):
    CO = "CO"
    EQ = "EQ"

