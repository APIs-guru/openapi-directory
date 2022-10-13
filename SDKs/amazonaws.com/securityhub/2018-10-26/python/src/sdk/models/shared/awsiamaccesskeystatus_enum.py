from dataclasses import dataclass, field
from typing import Enum

class AwsIamAccessKeyStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

