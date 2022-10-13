from dataclasses import dataclass, field
from typing import Enum

class ChangeActionEnum(str, Enum):
    ADD = "ADD"
    MODIFY = "MODIFY"
    REMOVE = "REMOVE"

