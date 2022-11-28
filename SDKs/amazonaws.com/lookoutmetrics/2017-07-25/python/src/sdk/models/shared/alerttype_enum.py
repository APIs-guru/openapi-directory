from dataclasses import dataclass, field
from enum import Enum

class AlertTypeEnum(str, Enum):
    SNS = "SNS"
    LAMBDA = "LAMBDA"

