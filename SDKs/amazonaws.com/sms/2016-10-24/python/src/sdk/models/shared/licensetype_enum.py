from dataclasses import dataclass, field
from typing import Enum

class LicenseTypeEnum(str, Enum):
    AWS = "AWS"
    BYOL = "BYOL"

