from dataclasses import dataclass, field
from typing import Enum

class TreatMissingDataEnum(str, Enum):
    BREACHING = "breaching"
    NOT_BREACHING = "notBreaching"
    IGNORE = "ignore"
    MISSING = "missing"

