from dataclasses import dataclass, field
from typing import Enum

class TokenTypeEnum(str, Enum):
    REFRESH_TOKEN = "REFRESH_TOKEN"

