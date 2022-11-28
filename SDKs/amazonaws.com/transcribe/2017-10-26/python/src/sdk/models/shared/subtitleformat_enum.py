from dataclasses import dataclass, field
from enum import Enum

class SubtitleFormatEnum(str, Enum):
    VTT = "vtt"
    SRT = "srt"

