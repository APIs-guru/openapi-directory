from dataclasses import dataclass, field
from enum import Enum

class InstanceAccessControlAttributeConfigurationStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS"
    CREATION_FAILED = "CREATION_FAILED"

