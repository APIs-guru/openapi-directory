from dataclasses import dataclass, field
from enum import Enum

class NonDefaultCountryEnum(str, Enum):
    US_UPPER = "US"
    CA_UPPER = "CA"
    US_LOWER = "us"
    CA_LOWER = "ca"

