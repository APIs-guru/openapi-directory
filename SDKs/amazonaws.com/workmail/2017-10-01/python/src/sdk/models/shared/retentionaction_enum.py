from dataclasses import dataclass, field
from typing import Enum

class RetentionActionEnum(str, Enum):
    NONE = "NONE"
    DELETE = "DELETE"
    PERMANENTLY_DELETE = "PERMANENTLY_DELETE"

