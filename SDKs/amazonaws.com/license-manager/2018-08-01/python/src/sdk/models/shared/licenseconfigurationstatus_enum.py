from dataclasses import dataclass, field
from typing import Enum

class LicenseConfigurationStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    DISABLED = "DISABLED"

