from dataclasses import dataclass, field
from typing import Enum

class ScopeEnum(str, Enum):
    WRITE_SETTINGS = "write-settings"
    VIEW_BUILDS = "view-builds"
    READ_SETTINGS = "read-settings"
    TRIGGER_BUILDS = "trigger-builds"
    ALL = "all"
    STATUS = "status"
    NONE = "none"

