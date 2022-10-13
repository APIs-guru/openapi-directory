from dataclasses import dataclass, field
from typing import Enum

class NonDefaultCountryEnum(str, Enum):
    US_UPPER = "US"
    CA_UPPER = "CA"
    US_LOWER = "us"
    CA_LOWER = "ca"

