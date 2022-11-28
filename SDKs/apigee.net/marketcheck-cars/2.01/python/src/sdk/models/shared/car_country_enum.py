from dataclasses import dataclass, field
from enum import Enum

class CarCountryEnum(str, Enum):
    US_UPPER = "US"
    CA_UPPER = "CA"
    US_LOWER = "us"
    CA_LOWER = "ca"
    ALL_LOWER = "all"
    ALL_UPPER = "ALL"

