from dataclasses import dataclass, field
from enum import Enum

class SyncActionEnum(str, Enum):
    START_SYNC = "START_SYNC"
    NO_ACTION = "NO_ACTION"

