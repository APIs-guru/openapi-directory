from dataclasses import dataclass, field
from enum import Enum

class RightsEnum(str, Enum):
    MOBILE = "mobile"
    TV = "tv"
    WEB = "web"

