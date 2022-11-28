from dataclasses import dataclass, field
from enum import Enum

class TargetSamplingRateEnum(str, Enum):
    PT1_S = "PT1S"
    PT5_S = "PT5S"
    PT10_S = "PT10S"
    PT15_S = "PT15S"
    PT30_S = "PT30S"
    PT1_M = "PT1M"
    PT5_M = "PT5M"
    PT10_M = "PT10M"
    PT15_M = "PT15M"
    PT30_M = "PT30M"
    PT1_H = "PT1H"

