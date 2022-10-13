from dataclasses import dataclass, field
from typing import Enum

class CustomStepStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"

