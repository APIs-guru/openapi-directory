from dataclasses import dataclass, field
from typing import Enum

class MediaFileFormatsEnum(str, Enum):
    MP4 = "mp4"
    MPD = "mpd"
    HLS = "hls"
    EXTERNAL = "external"

