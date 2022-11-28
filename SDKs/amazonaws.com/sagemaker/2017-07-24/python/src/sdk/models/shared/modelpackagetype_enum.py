from dataclasses import dataclass, field
from enum import Enum

class ModelPackageTypeEnum(str, Enum):
    VERSIONED = "Versioned"
    UNVERSIONED = "Unversioned"
    BOTH = "Both"

