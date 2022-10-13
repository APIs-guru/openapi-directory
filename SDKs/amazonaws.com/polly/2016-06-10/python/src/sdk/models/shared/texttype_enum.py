from dataclasses import dataclass, field
from typing import Enum

class TextTypeEnum(str, Enum):
    SSML = "ssml"
    TEXT = "text"

