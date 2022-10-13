from dataclasses import dataclass, field
from typing import Enum

class TextTypeEnum(str, Enum):
    HANDWRITING = "HANDWRITING"
    PRINTED = "PRINTED"

