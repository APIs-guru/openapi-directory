from dataclasses import dataclass, field
from enum import Enum

class ItemTypeEnum(str, Enum):
    ANALYSIS = "ANALYSIS"
    INCIDENT = "INCIDENT"
    METRIC = "METRIC"
    PARENT = "PARENT"
    ATTACHMENT = "ATTACHMENT"
    OTHER = "OTHER"

