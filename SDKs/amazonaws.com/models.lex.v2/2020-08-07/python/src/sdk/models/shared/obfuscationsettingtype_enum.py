from dataclasses import dataclass, field
from enum import Enum

class ObfuscationSettingTypeEnum(str, Enum):
    NONE = "None"
    DEFAULT_OBFUSCATION = "DefaultObfuscation"

