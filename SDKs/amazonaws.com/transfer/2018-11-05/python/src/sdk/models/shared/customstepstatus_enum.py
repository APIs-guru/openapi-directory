from dataclasses import dataclass, field
from enum import Enum

class CustomStepStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"

