from dataclasses import dataclass, field
from enum import Enum

class StudioComponentInitializationScriptRunContextEnum(str, Enum):
    SYSTEM_INITIALIZATION = "SYSTEM_INITIALIZATION"
    USER_INITIALIZATION = "USER_INITIALIZATION"

