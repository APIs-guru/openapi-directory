from dataclasses import dataclass, field
from typing import Enum

class ObfuscationSettingTypeEnum(str, Enum):
    NONE = "None"
    DEFAULT_OBFUSCATION = "DefaultObfuscation"

