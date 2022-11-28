from dataclasses import dataclass, field
from enum import Enum

class MigrationAlertTypeEnum(str, Enum):
    ERROR = "ERROR"
    WARN = "WARN"

