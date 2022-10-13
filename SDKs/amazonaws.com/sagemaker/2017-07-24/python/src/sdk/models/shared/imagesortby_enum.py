from dataclasses import dataclass, field
from typing import Enum

class ImageSortByEnum(str, Enum):
    CREATION_TIME = "CREATION_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"
    IMAGE_NAME = "IMAGE_NAME"

