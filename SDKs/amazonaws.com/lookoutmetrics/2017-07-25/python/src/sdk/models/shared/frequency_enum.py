from dataclasses import dataclass, field
from enum import Enum

class FrequencyEnum(str, Enum):
    P1_D = "P1D"
    PT1_H = "PT1H"
    PT10_M = "PT10M"
    PT5_M = "PT5M"

