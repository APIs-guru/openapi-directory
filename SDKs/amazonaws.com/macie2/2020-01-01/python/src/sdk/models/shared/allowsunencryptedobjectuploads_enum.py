from dataclasses import dataclass, field
from typing import Enum

class AllowsUnencryptedObjectUploadsEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

