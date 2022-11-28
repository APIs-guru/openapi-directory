from dataclasses import dataclass, field
from enum import Enum

class EditorialImageSearchFacetsFieldsEnum(str, Enum):
    ARTISTS = "artists"
    EVENTS = "events"
    LOCATIONS = "locations"
    SPECIFIC_PEOPLE = "specific_people"

