from dataclasses import dataclass, field
from typing import Enum

class ResourceStatusEnum(str, Enum):
    LIVE = "live"
    BETA = "beta"
    DEVELOPMENT = "development"
    UPCOMING = "upcoming"
    CONSIDERING = "considering"

