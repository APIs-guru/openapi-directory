from dataclasses import dataclass, field
from typing import Enum

class StudioComponentInitializationScriptRunContextEnum(str, Enum):
    SYSTEM_INITIALIZATION = "SYSTEM_INITIALIZATION"
    USER_INITIALIZATION = "USER_INITIALIZATION"

