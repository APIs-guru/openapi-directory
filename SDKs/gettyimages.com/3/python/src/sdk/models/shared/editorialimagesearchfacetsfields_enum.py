from dataclasses import dataclass, field
from typing import Enum

class EditorialImageSearchFacetsFieldsEnum(str, Enum):
    ARTISTS = "artists"
    EVENTS = "events"
    LOCATIONS = "locations"
    SPECIFIC_PEOPLE = "specific_people"

