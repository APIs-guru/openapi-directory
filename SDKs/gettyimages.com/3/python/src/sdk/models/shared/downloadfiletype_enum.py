from dataclasses import dataclass, field
from typing import Enum

class DownloadFileTypeEnum(str, Enum):
    EPS = "eps"
    JPG = "jpg"

