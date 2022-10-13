from dataclasses import dataclass, field
from typing import Enum

class AppLaunchConfigurationStatusEnum(str, Enum):
    NOT_CONFIGURED = "NOT_CONFIGURED"
    CONFIGURED = "CONFIGURED"

