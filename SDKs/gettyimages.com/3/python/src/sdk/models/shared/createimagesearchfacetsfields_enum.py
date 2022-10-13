from dataclasses import dataclass, field
from typing import Enum

class CreateImageSearchFacetsFieldsEnum(str, Enum):
    ARTISTS = "artists"
    LOCATIONS = "locations"

