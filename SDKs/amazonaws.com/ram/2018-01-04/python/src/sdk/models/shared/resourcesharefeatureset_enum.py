from dataclasses import dataclass, field
from typing import Enum

class ResourceShareFeatureSetEnum(str, Enum):
    CREATED_FROM_POLICY = "CREATED_FROM_POLICY"
    PROMOTING_TO_STANDARD = "PROMOTING_TO_STANDARD"
    STANDARD = "STANDARD"

