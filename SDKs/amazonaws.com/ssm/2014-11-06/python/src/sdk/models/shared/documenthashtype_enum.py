from dataclasses import dataclass, field
from typing import Enum

class DocumentHashTypeEnum(str, Enum):
    SHA256 = "Sha256"
    SHA1 = "Sha1"

