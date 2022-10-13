from dataclasses import dataclass, field
from typing import Enum

class ExportFilterOperatorEnum(str, Enum):
    CO = "CO"
    EQ = "EQ"

