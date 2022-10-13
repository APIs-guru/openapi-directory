from dataclasses import dataclass, field
from typing import Enum

class APIStatusEnum(str, Enum):
    LIVE = "live"
    BETA = "beta"
    DEVELOPMENT = "development"
    CONSIDERING = "considering"

