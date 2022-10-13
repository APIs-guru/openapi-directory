from dataclasses import dataclass, field
from typing import Enum

class LambdaFunctionTimeoutTypeEnum(str, Enum):
    START_TO_CLOSE = "START_TO_CLOSE"

