from dataclasses import dataclass, field
from typing import Enum

class FirewallDomainUpdateOperationEnum(str, Enum):
    ADD = "ADD"
    REMOVE = "REMOVE"
    REPLACE = "REPLACE"

