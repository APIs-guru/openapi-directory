from dataclasses import dataclass, field
from enum import Enum

class LicenseTypeEnum(str, Enum):
    AWS = "AWS"
    BYOL = "BYOL"

