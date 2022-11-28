from dataclasses import dataclass, field
from enum import Enum

class ItemTypeEnum(str, Enum):
    OBJECT = "OBJECT"
    FOLDER = "FOLDER"

