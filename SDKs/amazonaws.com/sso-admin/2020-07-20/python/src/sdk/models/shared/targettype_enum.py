from dataclasses import dataclass, field
from typing import Enum

class TargetTypeEnum(str, Enum):
    AWS_ACCOUNT = "AWS_ACCOUNT"

