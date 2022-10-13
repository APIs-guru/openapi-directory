from dataclasses import dataclass, field
from typing import Enum

class SearchFileTypeEnum(str, Enum):
    EPS = "eps"
    JPG = "jpg"

