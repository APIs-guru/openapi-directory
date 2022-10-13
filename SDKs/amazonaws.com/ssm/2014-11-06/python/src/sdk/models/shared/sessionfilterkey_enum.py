from dataclasses import dataclass, field
from typing import Enum

class SessionFilterKeyEnum(str, Enum):
    INVOKED_AFTER = "InvokedAfter"
    INVOKED_BEFORE = "InvokedBefore"
    TARGET = "Target"
    OWNER = "Owner"
    STATUS = "Status"
    SESSION_ID = "SessionId"

