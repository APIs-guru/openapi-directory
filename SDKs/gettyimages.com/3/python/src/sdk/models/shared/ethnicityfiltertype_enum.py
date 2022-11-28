from dataclasses import dataclass, field
from enum import Enum

class EthnicityFilterTypeEnum(str, Enum):
    BLACK = "black"
    CAUCASIAN = "caucasian"
    EAST_ASIAN = "east_asian"
    HISPANIC_LATINO = "hispanic_latino"
    JAPANESE = "japanese"
    MIDDLE_EASTERN = "middle_eastern"
    MIXED_RACE_PERSON = "mixed_race_person"
    MULTIETHNIC_GROUP = "multiethnic_group"
    NATIVE_AMERICAN_FIRST_NATIONS = "native_american_first_nations"
    PACIFIC_ISLANDER = "pacific_islander"
    SOUTH_ASIAN = "south_asian"
    SOUTHEAST_ASIAN = "southeast_asian"

