from dataclasses import dataclass, field
from enum import Enum

class DownloadFileTypeEnum(str, Enum):
    EPS = "eps"
    JPG = "jpg"

