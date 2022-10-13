from dataclasses import dataclass, field
from typing import Enum

class DataUploadFrequencyEnum(str, Enum):
    PT5_M = "PT5M"
    PT10_M = "PT10M"
    PT15_M = "PT15M"
    PT30_M = "PT30M"
    PT1_H = "PT1H"

