from dataclasses import dataclass, field
from enum import Enum

class ReservedNodeOfferingTypeEnum(str, Enum):
    REGULAR = "Regular"
    UPGRADABLE = "Upgradable"

