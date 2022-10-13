from dataclasses import dataclass, field
from typing import Enum

class PackageTypeEnum(str, Enum):
    ZIP = "Zip"
    IMAGE = "Image"

