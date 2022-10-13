from dataclasses import dataclass, field
from typing import Enum

class BackupTypeEnum(str, Enum):
    AUTOMATED = "AUTOMATED"
    MANUAL = "MANUAL"

