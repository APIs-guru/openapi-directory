from dataclasses import dataclass, field
from typing import Enum

class EditorialVideoTypeEnum(str, Enum):
    RAW = "raw"
    PRODUCED = "produced"

