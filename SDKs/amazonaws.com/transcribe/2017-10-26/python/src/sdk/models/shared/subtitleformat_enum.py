from dataclasses import dataclass, field
from typing import Enum

class SubtitleFormatEnum(str, Enum):
    VTT = "vtt"
    SRT = "srt"

