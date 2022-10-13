from dataclasses import dataclass, field
from typing import Enum

class LifeCycleStateEnum(str, Enum):
    STOPPED = "STOPPED"
    NOT_READY = "NOT_READY"
    READY_FOR_TEST = "READY_FOR_TEST"
    TESTING = "TESTING"
    READY_FOR_CUTOVER = "READY_FOR_CUTOVER"
    CUTTING_OVER = "CUTTING_OVER"
    CUTOVER = "CUTOVER"
    DISCONNECTED = "DISCONNECTED"

