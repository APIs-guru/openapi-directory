from dataclasses import dataclass, field
from typing import Enum

class HumanTaskUIStatusEnum(str, Enum):
    ACTIVE = "Active"
    DELETING = "Deleting"

