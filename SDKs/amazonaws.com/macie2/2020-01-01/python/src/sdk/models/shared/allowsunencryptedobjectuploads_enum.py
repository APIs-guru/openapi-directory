from dataclasses import dataclass, field
from enum import Enum

class AllowsUnencryptedObjectUploadsEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

