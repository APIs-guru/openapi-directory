from dataclasses import dataclass, field
from enum import Enum

class AppReplicationConfigurationStatusEnum(str, Enum):
    NOT_CONFIGURED = "NOT_CONFIGURED"
    CONFIGURED = "CONFIGURED"

