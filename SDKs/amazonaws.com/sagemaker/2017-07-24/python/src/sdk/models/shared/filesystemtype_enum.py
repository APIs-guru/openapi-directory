from dataclasses import dataclass, field
from enum import Enum

class FileSystemTypeEnum(str, Enum):
    EFS = "EFS"
    F_SX_LUSTRE = "FSxLustre"

