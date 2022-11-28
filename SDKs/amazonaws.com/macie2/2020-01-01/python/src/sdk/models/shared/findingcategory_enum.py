from dataclasses import dataclass, field
from enum import Enum

class FindingCategoryEnum(str, Enum):
    CLASSIFICATION = "CLASSIFICATION"
    POLICY = "POLICY"

