from dataclasses import dataclass, field
from typing import Enum

class TransferOptionEnum(str, Enum):
    IMPORT = "IMPORT"
    EXPORT = "EXPORT"
    LOCAL_USE = "LOCAL_USE"

