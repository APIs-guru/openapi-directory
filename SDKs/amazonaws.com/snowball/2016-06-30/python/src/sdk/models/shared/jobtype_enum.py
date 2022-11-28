from dataclasses import dataclass, field
from enum import Enum

class JobTypeEnum(str, Enum):
    IMPORT = "IMPORT"
    EXPORT = "EXPORT"
    LOCAL_USE = "LOCAL_USE"

