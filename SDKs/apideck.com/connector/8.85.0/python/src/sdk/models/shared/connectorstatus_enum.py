from dataclasses import dataclass, field
from enum import Enum

class ConnectorStatusEnum(str, Enum):
    LIVE = "live"
    BETA = "beta"
    DEVELOPMENT = "development"
    CONSIDERING = "considering"

