from dataclasses import dataclass, field
from typing import Enum

class AlertTypeEnum(str, Enum):
    SNS = "SNS"
    LAMBDA = "LAMBDA"

