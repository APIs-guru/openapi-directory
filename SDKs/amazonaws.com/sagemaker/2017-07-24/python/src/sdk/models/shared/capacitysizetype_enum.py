from dataclasses import dataclass, field
from enum import Enum

class CapacitySizeTypeEnum(str, Enum):
    INSTANCE_COUNT = "INSTANCE_COUNT"
    CAPACITY_PERCENT = "CAPACITY_PERCENT"

