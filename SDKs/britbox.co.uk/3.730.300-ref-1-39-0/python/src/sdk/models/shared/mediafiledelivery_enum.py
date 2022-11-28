from dataclasses import dataclass, field
from enum import Enum

class MediaFileDeliveryEnum(str, Enum):
    STREAM = "stream"
    PROGRESSIVE = "progressive"
    DOWNLOAD = "download"

