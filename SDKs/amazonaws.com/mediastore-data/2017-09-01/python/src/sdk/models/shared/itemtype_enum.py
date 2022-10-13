from dataclasses import dataclass, field
from typing import Enum

class ItemTypeEnum(str, Enum):
    OBJECT = "OBJECT"
    FOLDER = "FOLDER"

