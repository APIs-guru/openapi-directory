from dataclasses import dataclass, field
from enum import Enum

class HumanTaskUIStatusEnum(str, Enum):
    ACTIVE = "Active"
    DELETING = "Deleting"

