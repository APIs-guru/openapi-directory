from dataclasses import dataclass, field
from enum import Enum

class ConnectorStateEnum(str, Enum):
    RUNNING = "RUNNING"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

