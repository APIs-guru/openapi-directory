from dataclasses import dataclass, field
from typing import Enum

class DestinationEnum(str, Enum):
    CLOUDWATCH_LOGS = "CLOUDWATCH_LOGS"
    S3 = "S3"

