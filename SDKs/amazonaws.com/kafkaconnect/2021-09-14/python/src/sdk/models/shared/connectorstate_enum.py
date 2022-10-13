from dataclasses import dataclass, field
from typing import Enum

class ConnectorStateEnum(str, Enum):
    RUNNING = "RUNNING"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

