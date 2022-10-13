from dataclasses import dataclass, field
from typing import Enum

class SessionStatusEnum(str, Enum):
    CONNECTED = "Connected"
    CONNECTING = "Connecting"
    DISCONNECTED = "Disconnected"
    TERMINATED = "Terminated"
    TERMINATING = "Terminating"
    FAILED = "Failed"

