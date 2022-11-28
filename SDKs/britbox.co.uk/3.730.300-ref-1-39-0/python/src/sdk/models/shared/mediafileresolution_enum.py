from dataclasses import dataclass, field
from enum import Enum

class MediaFileResolutionEnum(str, Enum):
    HD_4_K = "HD-4K"
    HD_1080 = "HD-1080"
    HD_720 = "HD-720"
    SD = "SD"
    EXTERNAL = "External"

