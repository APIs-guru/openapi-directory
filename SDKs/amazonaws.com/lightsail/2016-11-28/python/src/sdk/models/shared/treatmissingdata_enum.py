from dataclasses import dataclass, field
from enum import Enum

class TreatMissingDataEnum(str, Enum):
    BREACHING = "breaching"
    NOT_BREACHING = "notBreaching"
    IGNORE = "ignore"
    MISSING = "missing"

