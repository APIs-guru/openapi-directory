from dataclasses import dataclass, field
from typing import Enum

class CodeContentTypeEnum(str, Enum):
    PLAINTEXT = "PLAINTEXT"
    ZIPFILE = "ZIPFILE"

