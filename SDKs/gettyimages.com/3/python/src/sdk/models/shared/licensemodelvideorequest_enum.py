from dataclasses import dataclass, field
from enum import Enum

class LicenseModelVideoRequestEnum(str, Enum):
    RIGHTSREADY = "rightsready"
    ROYALTYFREE = "royaltyfree"

