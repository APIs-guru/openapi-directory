from dataclasses import dataclass, field
from typing import Enum

class EventFieldValuesEnum(str, Enum):
    ID = "id"
    CHILD_EVENT_COUNT = "child_event_count"
    EDITORIAL_SEGMENTS = "editorial_segments"
    HERO_IMAGE = "hero_image"
    IMAGE_COUNT = "image_count"
    KEYWORDS = "keywords"
    LOCATION = "location"
    NAME = "name"
    START_DATE = "start_date"
    TYPE = "type"

