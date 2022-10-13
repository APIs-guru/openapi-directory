from dataclasses import dataclass, field
from typing import Enum

class MediaFileDeliveryEnum(str, Enum):
    STREAM = "stream"
    PROGRESSIVE = "progressive"
    DOWNLOAD = "download"

