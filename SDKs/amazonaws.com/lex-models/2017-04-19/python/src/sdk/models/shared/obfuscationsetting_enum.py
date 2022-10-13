from dataclasses import dataclass, field
from typing import Enum

class ObfuscationSettingEnum(str, Enum):
    NONE = "NONE"
    DEFAULT_OBFUSCATION = "DEFAULT_OBFUSCATION"

