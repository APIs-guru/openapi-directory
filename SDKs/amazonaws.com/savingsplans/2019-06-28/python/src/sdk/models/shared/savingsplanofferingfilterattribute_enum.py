from dataclasses import dataclass, field
from enum import Enum

class SavingsPlanOfferingFilterAttributeEnum(str, Enum):
    REGION = "region"
    INSTANCE_FAMILY = "instanceFamily"

