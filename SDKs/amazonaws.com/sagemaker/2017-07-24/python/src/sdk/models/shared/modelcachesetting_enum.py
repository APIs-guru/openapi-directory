from dataclasses import dataclass, field
from enum import Enum

class ModelCacheSettingEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

