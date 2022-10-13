from dataclasses import dataclass, field
from typing import Enum

class ConnectionAliasStateEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"

