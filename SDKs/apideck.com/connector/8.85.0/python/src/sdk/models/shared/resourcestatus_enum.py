from dataclasses import dataclass, field
from enum import Enum

class ResourceStatusEnum(str, Enum):
    LIVE = "live"
    BETA = "beta"
    DEVELOPMENT = "development"
    UPCOMING = "upcoming"
    CONSIDERING = "considering"

