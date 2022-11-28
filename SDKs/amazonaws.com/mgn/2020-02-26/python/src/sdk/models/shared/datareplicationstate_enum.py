from dataclasses import dataclass, field
from enum import Enum

class DataReplicationStateEnum(str, Enum):
    STOPPED = "STOPPED"
    INITIATING = "INITIATING"
    INITIAL_SYNC = "INITIAL_SYNC"
    BACKLOG = "BACKLOG"
    CREATING_SNAPSHOT = "CREATING_SNAPSHOT"
    CONTINUOUS = "CONTINUOUS"
    PAUSED = "PAUSED"
    RESCAN = "RESCAN"
    STALLED = "STALLED"
    DISCONNECTED = "DISCONNECTED"

