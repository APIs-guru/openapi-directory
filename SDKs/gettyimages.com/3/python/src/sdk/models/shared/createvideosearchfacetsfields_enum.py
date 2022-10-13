from dataclasses import dataclass, field
from typing import Enum

class CreateVideoSearchFacetsFieldsEnum(str, Enum):
    ARTISTS = "artists"
    LOCATIONS = "locations"

