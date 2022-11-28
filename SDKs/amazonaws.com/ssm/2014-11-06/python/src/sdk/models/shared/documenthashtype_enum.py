from dataclasses import dataclass, field
from enum import Enum

class DocumentHashTypeEnum(str, Enum):
    SHA256 = "Sha256"
    SHA1 = "Sha1"

