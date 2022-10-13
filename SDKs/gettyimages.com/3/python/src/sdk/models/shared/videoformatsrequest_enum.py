from dataclasses import dataclass, field
from typing import Enum

class VideoFormatsRequestEnum(str, Enum):
    SD = "sd"
    HD = "hd"
    FOURK = "4k"
    HD_WEB = "hd_web"

