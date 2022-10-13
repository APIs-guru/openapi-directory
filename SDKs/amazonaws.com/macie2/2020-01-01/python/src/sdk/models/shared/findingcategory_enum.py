from dataclasses import dataclass, field
from typing import Enum

class FindingCategoryEnum(str, Enum):
    CLASSIFICATION = "CLASSIFICATION"
    POLICY = "POLICY"

