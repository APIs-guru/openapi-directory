from dataclasses import dataclass, field
from enum import Enum

class EditorialVideoTypeEnum(str, Enum):
    RAW = "raw"
    PRODUCED = "produced"

