from dataclasses import dataclass, field
from enum import Enum

class AppLaunchConfigurationStatusEnum(str, Enum):
    NOT_CONFIGURED = "NOT_CONFIGURED"
    CONFIGURED = "CONFIGURED"

