from dataclasses import dataclass, field
from enum import Enum

class RecordingConfigurationStateEnum(str, Enum):
    CREATING = "CREATING"
    CREATE_FAILED = "CREATE_FAILED"
    ACTIVE = "ACTIVE"

