from dataclasses import dataclass, field
from enum import Enum

class LicenseConfigurationStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    DISABLED = "DISABLED"

