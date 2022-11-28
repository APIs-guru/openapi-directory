from dataclasses import dataclass, field
from enum import Enum

class MediaFileFormatsEnum(str, Enum):
    MP4 = "mp4"
    MPD = "mpd"
    HLS = "hls"
    EXTERNAL = "external"

