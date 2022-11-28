from dataclasses import dataclass, field
from enum import Enum

class BackupTypeEnum(str, Enum):
    AUTOMATED = "AUTOMATED"
    MANUAL = "MANUAL"

