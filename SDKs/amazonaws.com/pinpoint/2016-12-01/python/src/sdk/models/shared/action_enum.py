from dataclasses import dataclass, field
from typing import Enum

class ActionEnum(str, Enum):
    OPEN_APP = "OPEN_APP"
    DEEP_LINK = "DEEP_LINK"
    URL = "URL"

