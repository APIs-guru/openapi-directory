from dataclasses import dataclass, field
from typing import Enum

class EventDetailFieldValuesEnum(str, Enum):
    ID = "id"
    CHILD_EVENT_COUNT = "child_event_count"
    EDITORIAL_SEGMENTS = "editorial_segments"
    HERO_IMAGE = "hero_image"
    IMAGE_COUNT = "image_count"
    LOCATION = "location"
    NAME = "name"
    START_DATE = "start_date"
    TYPE = "type"

