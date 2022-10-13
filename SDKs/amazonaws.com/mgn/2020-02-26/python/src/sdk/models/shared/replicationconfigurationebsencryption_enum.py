from dataclasses import dataclass, field
from typing import Enum

class ReplicationConfigurationEbsEncryptionEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"

