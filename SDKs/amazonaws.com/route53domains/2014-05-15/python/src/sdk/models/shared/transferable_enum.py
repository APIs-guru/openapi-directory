from dataclasses import dataclass, field
from typing import Enum

class TransferableEnum(str, Enum):
    TRANSFERABLE = "TRANSFERABLE"
    UNTRANSFERABLE = "UNTRANSFERABLE"
    DONT_KNOW = "DONT_KNOW"

