from dataclasses import dataclass, field
from typing import Enum

class ConfigurationTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"

