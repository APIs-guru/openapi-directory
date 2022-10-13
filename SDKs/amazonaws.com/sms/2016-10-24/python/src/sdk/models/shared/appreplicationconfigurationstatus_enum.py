from dataclasses import dataclass, field
from typing import Enum

class AppReplicationConfigurationStatusEnum(str, Enum):
    NOT_CONFIGURED = "NOT_CONFIGURED"
    CONFIGURED = "CONFIGURED"

