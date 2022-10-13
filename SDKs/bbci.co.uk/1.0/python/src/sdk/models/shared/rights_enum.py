from dataclasses import dataclass, field
from typing import Enum

class RightsEnum(str, Enum):
    MOBILE = "mobile"
    TV = "tv"
    WEB = "web"

