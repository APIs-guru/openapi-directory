from dataclasses import dataclass, field
from enum import Enum

class ChangeActionEnum(str, Enum):
    ADD = "ADD"
    MODIFY = "MODIFY"
    REMOVE = "REMOVE"

