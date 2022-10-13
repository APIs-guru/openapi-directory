from dataclasses import dataclass, field
from typing import Enum

class FileSystemTypeEnum(str, Enum):
    EFS = "EFS"
    F_SX_LUSTRE = "FSxLustre"

