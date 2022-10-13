from dataclasses import dataclass, field
from typing import Enum

class MigrationAlertTypeEnum(str, Enum):
    ERROR = "ERROR"
    WARN = "WARN"

