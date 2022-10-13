from dataclasses import dataclass, field
from typing import Enum

class ModelCacheSettingEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

