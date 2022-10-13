from dataclasses import dataclass, field
from typing import Enum

class VideosSortEnum(str, Enum):
    NAME = "name"
    MINUS_DURATION = "-duration"
    MINUS_CREATED_AT = "-createdAt"
    MINUS_PUBLISHED_AT = "-publishedAt"
    MINUS_VIEWS = "-views"
    MINUS_LIKES = "-likes"
    MINUS_TRENDING = "-trending"
    MINUS_HOT = "-hot"

