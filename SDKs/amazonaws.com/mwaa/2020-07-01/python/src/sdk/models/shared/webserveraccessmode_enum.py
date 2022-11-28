from dataclasses import dataclass, field
from enum import Enum

class WebserverAccessModeEnum(str, Enum):
    PRIVATE_ONLY = "PRIVATE_ONLY"
    PUBLIC_ONLY = "PUBLIC_ONLY"

