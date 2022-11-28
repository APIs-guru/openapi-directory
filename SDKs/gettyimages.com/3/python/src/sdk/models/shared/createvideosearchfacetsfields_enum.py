from dataclasses import dataclass, field
from enum import Enum

class CreateVideoSearchFacetsFieldsEnum(str, Enum):
    ARTISTS = "artists"
    LOCATIONS = "locations"

