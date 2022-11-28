from dataclasses import dataclass, field
from enum import Enum

class CreateImageSearchFacetsFieldsEnum(str, Enum):
    ARTISTS = "artists"
    LOCATIONS = "locations"

