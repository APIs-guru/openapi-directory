from dataclasses import dataclass, field
from enum import Enum

class RetentionActionEnum(str, Enum):
    NONE = "NONE"
    DELETE = "DELETE"
    PERMANENTLY_DELETE = "PERMANENTLY_DELETE"

