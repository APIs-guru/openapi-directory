from dataclasses import dataclass, field
from enum import Enum

class AwsIamAccessKeyStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

