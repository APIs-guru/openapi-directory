from dataclasses import dataclass, field
from enum import Enum

class OutputFormatEnum(str, Enum):
    JSON = "json"
    MP3 = "mp3"
    OGG_VORBIS = "ogg_vorbis"
    PCM = "pcm"

