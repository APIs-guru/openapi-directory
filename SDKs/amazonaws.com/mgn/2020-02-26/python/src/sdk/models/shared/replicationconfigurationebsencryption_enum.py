from dataclasses import dataclass, field
from enum import Enum

class ReplicationConfigurationEbsEncryptionEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"

