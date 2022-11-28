from dataclasses import dataclass, field
from enum import Enum

class SnowballCapacityEnum(str, Enum):
    T50 = "T50"
    T80 = "T80"
    T100 = "T100"
    T42 = "T42"
    T98 = "T98"
    T8 = "T8"
    T14 = "T14"
    NO_PREFERENCE = "NoPreference"

