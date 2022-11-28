from dataclasses import dataclass, field
from enum import Enum

class FieldNameStringEnum(str, Enum):
    RESOURCE_ARN = "RESOURCE_ARN"
    ROLE_ARN = "ROLE_ARN"
    LAST_MODIFIED = "LAST_MODIFIED"

