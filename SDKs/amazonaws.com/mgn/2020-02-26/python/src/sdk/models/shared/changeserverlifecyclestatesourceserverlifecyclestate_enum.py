from dataclasses import dataclass, field
from enum import Enum

class ChangeServerLifeCycleStateSourceServerLifecycleStateEnum(str, Enum):
    READY_FOR_TEST = "READY_FOR_TEST"
    READY_FOR_CUTOVER = "READY_FOR_CUTOVER"
    CUTOVER = "CUTOVER"

