from dataclasses import dataclass, field
from typing import Enum

class FindingActionTypeEnum(str, Enum):
    AWS_API_CALL = "AWS_API_CALL"

