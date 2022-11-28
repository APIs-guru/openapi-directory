from dataclasses import dataclass, field
from enum import Enum

class ChildPolicyEnum(str, Enum):
    TERMINATE = "TERMINATE"
    REQUEST_CANCEL = "REQUEST_CANCEL"
    ABANDON = "ABANDON"

