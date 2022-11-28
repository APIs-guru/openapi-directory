from dataclasses import dataclass, field
from enum import Enum

class MediaFormatEnum(str, Enum):
    MP3 = "mp3"
    MP4 = "mp4"
    WAV = "wav"
    FLAC = "flac"
    OGG = "ogg"
    AMR = "amr"
    WEBM = "webm"

