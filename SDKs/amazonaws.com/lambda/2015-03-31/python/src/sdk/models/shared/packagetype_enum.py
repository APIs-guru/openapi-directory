from dataclasses import dataclass, field
from enum import Enum

class PackageTypeEnum(str, Enum):
    ZIP = "Zip"
    IMAGE = "Image"

