from dataclasses import dataclass, field
from typing import Enum

class SavingsPlanOfferingFilterAttributeEnum(str, Enum):
    REGION = "region"
    INSTANCE_FAMILY = "instanceFamily"

