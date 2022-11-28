from dataclasses import dataclass, field
from enum import Enum

class ConfigurationTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"

