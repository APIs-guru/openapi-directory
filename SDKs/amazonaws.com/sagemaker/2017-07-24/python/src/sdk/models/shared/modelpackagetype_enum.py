from dataclasses import dataclass, field
from typing import Enum

class ModelPackageTypeEnum(str, Enum):
    VERSIONED = "Versioned"
    UNVERSIONED = "Unversioned"
    BOTH = "Both"

