from dataclasses import dataclass, field
from typing import Enum

class ChildPolicyEnum(str, Enum):
    TERMINATE = "TERMINATE"
    REQUEST_CANCEL = "REQUEST_CANCEL"
    ABANDON = "ABANDON"

