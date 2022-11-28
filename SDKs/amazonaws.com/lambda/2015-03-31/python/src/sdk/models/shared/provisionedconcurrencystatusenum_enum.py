from dataclasses import dataclass, field
from enum import Enum

class ProvisionedConcurrencyStatusEnumEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    READY = "READY"
    FAILED = "FAILED"

